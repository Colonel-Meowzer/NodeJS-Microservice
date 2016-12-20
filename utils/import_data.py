#!/home/dustin/anaconda2/bin/python
'''
	This script requires sqlalchemy and pandas libraries to be installed. Install them with pip or anaconda.
'''
import argparse
import json

from sqlalchemy import create_engine
import pandas as pd

def parse_arguments():
	parser = argparse.ArgumentParser(description='Import data from csv')
	parser.add_argument('-s', '--schema', help='schema for which to write', required=True)
	parser.add_argument('-t', '--table', help='table name to create', required=True)
	parser.add_argument('-f', '--file', help='csv file and path (/path/to/file.csv)', required=True)
	parser.add_argument('-c', '--config', help='config file and path (/path/to/config.json)', default='../config/config.json')
	parser.add_argument('-m', '--mode', help='write mode (default fails)', choices=['fail','replace','append'], default='fail')
	parser.add_argument('-d', '--default', help='default for null values')
	parser.add_argument('-e', '--environment', help='environment', default="development")
	parser.add_argument('-n', '--number', help='push number records')

	return parser.parse_args()

def read_config(file):
	try:
		config = {}
		with open(file) as config_file:    
			config = json.load(config_file)
		return config
	except:
		print 'Error reading config file'
		sys.exit(1)

if __name__ == "__main__":
	args = parse_arguments()
	config = read_config(args.config).get(str(args.environment))
	
	df = pd.read_csv(args.file)
	df.columns = [c.lower() for c in df.columns] #postgres doesn't like capitals or spaces
	if args.default is not None:
		df.fillna(value=args.default, inplace=True)
	engine_str = 'postgresql://{username}:{password}@{host}:5432/{database}'.format(username=config.get('username'), password=config.get('password'), host=config.get('host'), database=config.get('database'))
	engine = create_engine(engine_str)
	print 'starting...'
	if args.number is not None:
		df = df.head(args.number)
	print 'Dataframe Length: %s' %(len(df))
	#print df
	df.to_sql(args.table, engine, schema=args.schema, if_exists=args.mode, index=False)
	print 'ending'