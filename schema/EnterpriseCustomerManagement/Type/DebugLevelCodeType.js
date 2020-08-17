var Modeler = require("../Modeler.js");
var className = 'TypeDebugLevelCodeType';

var TypeDebugLevelCodeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DebugLevelCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "DebugLevelCodeType",
        "xsd:restriction": {
          base: "StringType",
          "xsd:enumeration": [
            {
              value: "None"
            },
            {
              value: "Low"
            },
            {
              value: "Medium"
            },
            {
              value: "High"
            }
          ]
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
	  DebugLevelCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "DebugLevelCodeType",
        "xsd:restriction": {
          base: "StringType",
          "xsd:enumeration": [
            {
              value: "None"
            },
            {
              value: "Low"
            },
            {
              value: "Medium"
            },
            {
              value: "High"
            }
          ]
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDebugLevelCodeType;
Modeler.register(TypeDebugLevelCodeType, "TypeDebugLevelCodeType");
