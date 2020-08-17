var Modeler = require("../Modeler.js");
var className = 'TypePositiveIntegerType';

var TypePositiveIntegerType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PositiveIntegerType: {
      type: "string",
      wsdlDefinition: {
        name: "PositiveIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "positiveInteger is derived from nonNegativeInteger by setting the value of minInclusive to be 1.  This results in the standard mathematical concept of the positive integer numbers. The value space of positiveInteger is the infinite set {1,2,...}. The base type of positiveInteger is nonNegativeInteger"
        },
        "xsd:restriction": {
          base: "xsd:positiveInteger"
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
	  PositiveIntegerType: {
      type: "string",
      wsdlDefinition: {
        name: "PositiveIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "positiveInteger is derived from nonNegativeInteger by setting the value of minInclusive to be 1.  This results in the standard mathematical concept of the positive integer numbers. The value space of positiveInteger is the infinite set {1,2,...}. The base type of positiveInteger is nonNegativeInteger"
        },
        "xsd:restriction": {
          base: "xsd:positiveInteger"
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePositiveIntegerType;
Modeler.register(TypePositiveIntegerType, "TypePositiveIntegerType");
