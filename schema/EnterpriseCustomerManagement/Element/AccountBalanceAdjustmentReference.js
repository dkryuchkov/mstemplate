var Modeler = require("../Modeler.js");
var className = 'ElementAccountBalanceAdjustmentReference';

var ElementAccountBalanceAdjustmentReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AccountBalanceAdjustmentReference: {
      type: "TypeAccountBalanceAdjustmentReferenceType",
      wsdlDefinition: {
        name: "AccountBalanceAdjustmentReference",
        type: "AccountBalanceAdjustmentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The Account Balance Adjustment represents a document that is used for adjusting the Account information. The adjustments can be on an Invoice, Item, Customer Account and etc."
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
	  AccountBalanceAdjustmentReference: {
      type: "TypeAccountBalanceAdjustmentReferenceType",
      wsdlDefinition: {
        name: "AccountBalanceAdjustmentReference",
        type: "AccountBalanceAdjustmentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The Account Balance Adjustment represents a document that is used for adjusting the Account information. The adjustments can be on an Invoice, Item, Customer Account and etc."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAccountBalanceAdjustmentReference;
Modeler.register(ElementAccountBalanceAdjustmentReference, "ElementAccountBalanceAdjustmentReference");
