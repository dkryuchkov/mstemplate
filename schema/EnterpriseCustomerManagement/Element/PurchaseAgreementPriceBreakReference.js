var Modeler = require("../Modeler.js");
var className = 'ElementPurchaseAgreementPriceBreakReference';

var ElementPurchaseAgreementPriceBreakReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PurchaseAgreementPriceBreakReference: {
      type: "TypePurchaseAgreementPriceBreakReferenceType",
      wsdlDefinition: {
        name: "PurchaseAgreementPriceBreakReference",
        type: "PurchaseAgreementPriceBreakReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Price Qualification Line on a Purchase Agreement. A Price Qualification Line identifies the negotiated price for an item for a speciifc qualification. Examples of qualifications are Ship To Locations, Order Quantity etc"
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
	  PurchaseAgreementPriceBreakReference: {
      type: "TypePurchaseAgreementPriceBreakReferenceType",
      wsdlDefinition: {
        name: "PurchaseAgreementPriceBreakReference",
        type: "PurchaseAgreementPriceBreakReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Price Qualification Line on a Purchase Agreement. A Price Qualification Line identifies the negotiated price for an item for a speciifc qualification. Examples of qualifications are Ship To Locations, Order Quantity etc"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPurchaseAgreementPriceBreakReference;
Modeler.register(ElementPurchaseAgreementPriceBreakReference, "ElementPurchaseAgreementPriceBreakReference");
