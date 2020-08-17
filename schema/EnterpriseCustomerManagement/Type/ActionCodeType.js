var Modeler = require("../Modeler.js");
var className = 'TypeActionCodeType';

var TypeActionCodeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ActionCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "ActionCodeType",
        "xsd:restriction": {
          base: "StringType",
          "xsd:enumeration": [
            {
              value: "ADD"
            },
            {
              value: "UPDATE"
            },
            {
              value: "DELETE"
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
	  ActionCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "ActionCodeType",
        "xsd:restriction": {
          base: "StringType",
          "xsd:enumeration": [
            {
              value: "ADD"
            },
            {
              value: "UPDATE"
            },
            {
              value: "DELETE"
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

module.exports = TypeActionCodeType;
Modeler.register(TypeActionCodeType, "TypeActionCodeType");
