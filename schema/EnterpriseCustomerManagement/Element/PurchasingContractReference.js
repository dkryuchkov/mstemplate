var Modeler = require("../Modeler.js");
var className = 'ElementPurchasingContractReference';

var ElementPurchasingContractReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PurchasingContractReference: {
      type: "TypeContractReferenceType",
      wsdlDefinition: {
        name: "PurchasingContractReference",
        type: "ContractReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A specific agreement between a customer and a supplier to procure goods at pre-determined terms"
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
	  PurchasingContractReference: {
      type: "TypeContractReferenceType",
      wsdlDefinition: {
        name: "PurchasingContractReference",
        type: "ContractReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A specific agreement between a customer and a supplier to procure goods at pre-determined terms"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPurchasingContractReference;
Modeler.register(ElementPurchasingContractReference, "ElementPurchasingContractReference");
