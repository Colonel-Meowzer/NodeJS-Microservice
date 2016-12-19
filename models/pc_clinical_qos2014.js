'use strict';
module.exports = function(sequelize, DataTypes) {
  var pc_clinical_qos2014 = sequelize.define('pc_clinical_qos2014', {
    organization: DataTypes.STRING,
	gp_pac_id: {
		type: DataTypes.BIGINT,
		primaryKey: true
	},
	state: DataTypes.STRING,
	in_pqrs: DataTypes.STRING,
	flu_shot_season: DataTypes.FLOAT,
	measure110_fnote: DataTypes.FLOAT,
	pneumonia_vacc_adults: DataTypes.FLOAT,
	measure111_fnote: DataTypes.FLOAT,
	screen_deprsn: DataTypes.FLOAT,
	measure134_fnote: DataTypes.FLOAT,
	screen_tobacco: DataTypes.FLOAT,
	measure226_fnote: DataTypes.FLOAT,
	screen_obesity_watch: DataTypes.FLOAT,
	measure128_fnote: DataTypes.FLOAT,
	screen_hblood_prsr: DataTypes.FLOAT,
	measure317_fnote: DataTypes.FLOAT,
	screen_bcancer: DataTypes.FLOAT,
	measure112_fnote: DataTypes.FLOAT,
	screen_colcancer: DataTypes.FLOAT,
	measure113_fnote: DataTypes.FLOAT,
	comp_meds: DataTypes.FLOAT,
	measure46_fnote: DataTypes.FLOAT,
	diabetes_control: DataTypes.FLOAT,
	measuredm13_fnote: DataTypes.FLOAT,
	meds_cancer: DataTypes.FLOAT,
	measuredm16_fnote: DataTypes.FLOAT,
	meds_hattacks: DataTypes.FLOAT,
	measure204_fnote: DataTypes.FLOAT,
	heart_failing: DataTypes.FLOAT,
	measure8_fnote: DataTypes.FLOAT,
	meds_heart_pump: DataTypes.FLOAT,
	measure118_fnote: DataTypes.FLOAT
  }, 
  {
    schema: "ods",
    createdAt: false,
    updatedAt: false
  });
  return pc_clinical_qos2014;
};