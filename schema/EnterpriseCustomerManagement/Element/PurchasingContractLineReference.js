var Modeler = require("../Modeler.js");
var className = 'ElementPurchasingContractLineReference';

var ElementPurchasingContractLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PurchasingContractLineReference: {
      type: "TypePurchasingContractLineReferenceType",
      wsdlDefinition: {
        name: "PurchasingContractLineReference",
        type: "PurchasingContractLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a specific line within a purchasing contract"
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
	  PurchasingContractLineReference: {
      type: "TypePurchasingContractLineReferenceType",
      wsdlDefinition: {
        name: "PurchasingContractLineReference",
        type: "PurchasingContractLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a specific line within a purchasing contract"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPurchasingContractLineReference;
Modeler.register(ElementPurchasingContractLineReference, "ElementPurchasingContractLineReference");
