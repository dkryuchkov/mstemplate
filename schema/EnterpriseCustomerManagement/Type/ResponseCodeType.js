var Modeler = require("../Modeler.js");
var className = 'TypeResponseCodeType';

var TypeResponseCodeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ResponseCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "ResponseCodeType",
        "xsd:annotation": {
          "xsd:documentation": "ID: ID of the object expected to be returned by the service provider on successful processingOBJECT: Entire Object that was created/ updated is expected to be returned by the service provider on successful processing"
        },
        "xsd:restriction": {
          base: "StringType",
          "xsd:enumeration": [
            {
              value: "ID"
            },
            {
              value: "OBJECT"
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
	  ResponseCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "ResponseCodeType",
        "xsd:annotation": {
          "xsd:documentation": "ID: ID of the object expected to be returned by the service provider on successful processingOBJECT: Entire Object that was created/ updated is expected to be returned by the service provider on successful processing"
        },
        "xsd:restriction": {
          base: "StringType",
          "xsd:enumeration": [
            {
              value: "ID"
            },
            {
              value: "OBJECT"
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

module.exports = TypeResponseCodeType;
Modeler.register(TypeResponseCodeType, "TypeResponseCodeType");
