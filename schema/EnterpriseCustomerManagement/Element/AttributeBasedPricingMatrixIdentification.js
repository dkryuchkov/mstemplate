var Modeler = require("../Modeler.js");
var className = 'ElementAttributeBasedPricingMatrixIdentification';

var ElementAttributeBasedPricingMatrixIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AttributeBasedPricingMatrixIdentification: {
      type: "TypeAttributeBasedPricingMatrixIdentificationType",
      wsdlDefinition: {
        name: "AttributeBasedPricingMatrixIdentification",
        type: "AttributeBasedPricingMatrixIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Attribute Based Pricing Matrix"
        },
        ns: "WL5G3N2",
        attribute: false
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
	  AttributeBasedPricingMatrixIdentification: {
      type: "TypeAttributeBasedPricingMatrixIdentificationType",
      wsdlDefinition: {
        name: "AttributeBasedPricingMatrixIdentification",
        type: "AttributeBasedPricingMatrixIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Attribute Based Pricing Matrix"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAttributeBasedPricingMatrixIdentification;
Modeler.register(ElementAttributeBasedPricingMatrixIdentification, "ElementAttributeBasedPricingMatrixIdentification");
