var Modeler = require("../Modeler.js");
var className = 'TypeImplementationCodeType';

var TypeImplementationCodeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ImplementationCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "ImplementationCodeType",
        "xsd:restriction": {
          base: "StringType",
          "xsd:enumeration": [
            {
              value: "BPEL"
            },
            {
              value: "ESB"
            },
            {
              value: "Other"
            },
            {
              value: "JAVA"
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
	  ImplementationCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "ImplementationCodeType",
        "xsd:restriction": {
          base: "StringType",
          "xsd:enumeration": [
            {
              value: "BPEL"
            },
            {
              value: "ESB"
            },
            {
              value: "Other"
            },
            {
              value: "JAVA"
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

module.exports = TypeImplementationCodeType;
Modeler.register(TypeImplementationCodeType, "TypeImplementationCodeType");
