var Modeler = require("../Modeler.js");
var className = 'TypeNonNegativeIntegerType';

var TypeNonNegativeIntegerType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  NonNegativeIntegerType: {
      type: "string",
      wsdlDefinition: {
        name: "NonNegativeIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "nonNegativeInteger is an integer the minInclusive of 0. This results in the standard mathematical concept of the non-negative integers. The value space of nonNegativeInteger is the infinite set {0,1,2,...}."
        },
        "xsd:restriction": {
          base: "xsd:nonNegativeInteger",
          "xsd:minInclusive": {
            value: "0"
          }
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
	  NonNegativeIntegerType: {
      type: "string",
      wsdlDefinition: {
        name: "NonNegativeIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "nonNegativeInteger is an integer the minInclusive of 0. This results in the standard mathematical concept of the non-negative integers. The value space of nonNegativeInteger is the infinite set {0,1,2,...}."
        },
        "xsd:restriction": {
          base: "xsd:nonNegativeInteger",
          "xsd:minInclusive": {
            value: "0"
          }
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeNonNegativeIntegerType;
Modeler.register(TypeNonNegativeIntegerType, "TypeNonNegativeIntegerType");
