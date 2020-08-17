var Modeler = require("../Modeler.js");
var className = 'TypePercentType';

var TypePercentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PercentType: {
      type: "string",
      wsdlDefinition: {
        name: "PercentType",
        "xsd:annotation": {
          "xsd:documentation": "A percent is a value representing a fraction of one hundred, expressed as a quotient -- Usage  Percent. Type is used to represent a percentage that indicates how many hundredths of a basic value are to be calculated. The result of the calculation is the proportion in percent of, e.g., amounts, values, rates, discounts, and taxes. For example, \"8.25%\" should be passed as \"8.25\", \"10%\" should be passed as \"10\" or \"10.0\" etc, \"150%\" should be passed as \"150\" or \"150.0\" etc."
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
	  PercentType: {
      type: "string",
      wsdlDefinition: {
        name: "PercentType",
        "xsd:annotation": {
          "xsd:documentation": "A percent is a value representing a fraction of one hundred, expressed as a quotient -- Usage  Percent. Type is used to represent a percentage that indicates how many hundredths of a basic value are to be calculated. The result of the calculation is the proportion in percent of, e.g., amounts, values, rates, discounts, and taxes. For example, \"8.25%\" should be passed as \"8.25\", \"10%\" should be passed as \"10\" or \"10.0\" etc, \"150%\" should be passed as \"150\" or \"150.0\" etc."
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

module.exports = TypePercentType;
Modeler.register(TypePercentType, "TypePercentType");
