var Modeler = require("../Modeler.js");
var className = 'TypeCustomAttributeBasedPricingMatrixReferenceType';

var TypeCustomAttributeBasedPricingMatrixReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomAttributeBasedPricingMatrixReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomAttributeBasedPricingMatrixReferenceType",
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
	  CustomAttributeBasedPricingMatrixReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomAttributeBasedPricingMatrixReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomAttributeBasedPricingMatrixReferenceType;
Modeler.register(TypeCustomAttributeBasedPricingMatrixReferenceType, "TypeCustomAttributeBasedPricingMatrixReferenceType");
