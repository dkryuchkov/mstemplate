var Modeler = require("../Modeler.js");
var className = 'TypeYearType';

var TypeYearType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  YearType: {
      type: "string",
      wsdlDefinition: {
        name: "YearType",
        "xsd:restriction": {
          base: "xsd:gYear"
        },
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
	  YearType: {
      type: "string",
      wsdlDefinition: {
        name: "YearType",
        "xsd:restriction": {
          base: "xsd:gYear"
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeYearType;
Modeler.register(TypeYearType, "TypeYearType");
