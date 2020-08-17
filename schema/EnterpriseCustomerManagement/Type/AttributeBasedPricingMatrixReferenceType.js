var Modeler = require("../Modeler.js");
var className = 'TypeAttributeBasedPricingMatrixReferenceType';

var TypeAttributeBasedPricingMatrixReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AttributeBasedPricingMatrixIdentification: {
      type: "TypeAttributeBasedPricingMatrixIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AttributeBasedPricingMatrixIdentification",
        type: "AttributeBasedPricingMatrixIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomAttributeBasedPricingMatrixReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomAttributeBasedPricingMatrixReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:AttributeBasedPricingMatrixIdentification",
        type: "AttributeBasedPricingMatrixIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomAttributeBasedPricingMatrixReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomAttributeBasedPricingMatrixReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAttributeBasedPricingMatrixReferenceType;
Modeler.register(TypeAttributeBasedPricingMatrixReferenceType, "TypeAttributeBasedPricingMatrixReferenceType");
