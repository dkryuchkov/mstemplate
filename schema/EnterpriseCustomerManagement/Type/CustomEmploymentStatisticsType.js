var Modeler = require("../Modeler.js");
var className = 'TypeCustomEmploymentStatisticsType';

var TypeCustomEmploymentStatisticsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomEmploymentStatisticsType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEmploymentStatisticsType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CustomEmploymentStatisticsType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEmploymentStatisticsType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomEmploymentStatisticsType;
Modeler.register(TypeCustomEmploymentStatisticsType, "TypeCustomEmploymentStatisticsType");
