var Modeler = require("../Modeler.js");
var className = 'ElementAttributeBasedPricingMatrixReference';

var ElementAttributeBasedPricingMatrixReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AttributeBasedPricingMatrixReference: {
      type: "TypeAttributeBasedPricingMatrixReferenceType",
      wsdlDefinition: {
        name: "AttributeBasedPricingMatrixReference",
        type: "AttributeBasedPricingMatrixReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to an attribute pricing matrix that provides pricing adjustments for the line item product based on its attributes."
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
	  AttributeBasedPricingMatrixReference: {
      type: "TypeAttributeBasedPricingMatrixReferenceType",
      wsdlDefinition: {
        name: "AttributeBasedPricingMatrixReference",
        type: "AttributeBasedPricingMatrixReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to an attribute pricing matrix that provides pricing adjustments for the line item product based on its attributes."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAttributeBasedPricingMatrixReference;
Modeler.register(ElementAttributeBasedPricingMatrixReference, "ElementAttributeBasedPricingMatrixReference");
