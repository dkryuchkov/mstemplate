var Modeler = require("../Modeler.js");
var className = 'TypeIntegerType';

var TypeIntegerType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  IntegerType: {
      type: "string",
      wsdlDefinition: {
        name: "IntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Integer is derived from decimal by fixing the value of fractionDigits to be 0. This results in the standard mathematical concept of the integer numbers. The value space of integer is the infinite set {...,-2,-1,0,1,2,...}. The base type of integer is decimal"
        },
        "xsd:restriction": {
          base: "xsd:integer"
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
	  IntegerType: {
      type: "string",
      wsdlDefinition: {
        name: "IntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Integer is derived from decimal by fixing the value of fractionDigits to be 0. This results in the standard mathematical concept of the integer numbers. The value space of integer is the infinite set {...,-2,-1,0,1,2,...}. The base type of integer is decimal"
        },
        "xsd:restriction": {
          base: "xsd:integer"
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeIntegerType;
Modeler.register(TypeIntegerType, "TypeIntegerType");
