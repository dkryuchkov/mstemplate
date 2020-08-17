var Modeler = require("../Modeler.js");
var className = 'TypeCustomPurchasingContractReferenceType';

var TypeCustomPurchasingContractReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPurchasingContractReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPurchasingContractReferenceType",
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
	  CustomPurchasingContractReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPurchasingContractReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPurchasingContractReferenceType;
Modeler.register(TypeCustomPurchasingContractReferenceType, "TypeCustomPurchasingContractReferenceType");
