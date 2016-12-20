
Test git push :)

#Hypo (Server client)
## Introduction
This client is contains server side code for the Hypo service. This is designed to be a fully functional RESTful API that provides microservices to the Hypo User client.

## Installation Instructions

### Linux
1. Install NodeJs
	* `sudo apt install nodejs; apt install nodejs-legacy`
2. Install npm
	* `sudo apt install npm`
3. Install Git
	* `sudo apt install git`
4. Clone Repository to local folder with Git
5. Install Node packages
	* `cd <cloned-repo> && npm install`
6. Run Server
	* `npm start`
7. Decrypt database config file*
8. Check localhost:3000

### MacOS
1. Install package manager
	* I particularly use [homebrew](http://brew.sh/) so the instructions going forward will be using those commands. All package managers have similar characteristics so if you wanted to do something like Nix, Fink, etc, it shouldn't be too different.
2. Install Node
	* `brew install nodejs`
3. Install npm
	* `brew install npm`
4. Install git
	* `brew install git`
5. Clone Repository to local folder with Git
6. Install Node packages
	* `cd <cloned-repo> && npm install`
7. Decrypt database config file*
8. Run Server
	* `npm start`
9. Check the [site](http://localhost:3000) to see if its running

**must have the appropriate access to decrypt file*