var Modeler = require("../Modeler.js");
var className = 'TypeNumericType';

var TypeNumericType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  NumericType: {
      type: "string",
      wsdlDefinition: {
        name: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Numeric information that is assigned or is determined by calculation, counting, or sequencing. It does not require a unit of quantity or unit of measure"
        },
        "xsd:restriction": {
          base: "xsd:decimal"
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
	  NumericType: {
      type: "string",
      wsdlDefinition: {
        name: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Numeric information that is assigned or is determined by calculation, counting, or sequencing. It does not require a unit of quantity or unit of measure"
        },
        "xsd:restriction": {
          base: "xsd:decimal"
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeNumericType;
Modeler.register(TypeNumericType, "TypeNumericType");
