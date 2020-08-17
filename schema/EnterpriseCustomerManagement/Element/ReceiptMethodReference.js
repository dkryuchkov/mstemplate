var Modeler = require("../Modeler.js");
var className = 'ElementReceiptMethodReference';

var ElementReceiptMethodReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ReceiptMethodReference: {
      type: "TypeReceiptMethodReferenceType",
      wsdlDefinition: {
        name: "ReceiptMethodReference",
        type: "ReceiptMethodReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a ReceiptMethod. ReceiptMethod is Account Receivable (AR) object which stores information about payment methods that are receipt attributes defined and assigned by a user to receipt classes. Account Receivables System uses receipt methods to account for receipt entries and their applications. Receipt methods also determine a customer remittance bank information e.g. Cash receipt method specifies that Debit Memos should inherit Receipt Numbers and remittance bank account is Wells Fargo account 'WFg-216'; Automatic receipt method specifies to create one receipt per invoice inheriting its invoice number, and remittance bank account is Bank Of America account 'BofA-204'."
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
	  ReceiptMethodReference: {
      type: "TypeReceiptMethodReferenceType",
      wsdlDefinition: {
        name: "ReceiptMethodReference",
        type: "ReceiptMethodReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a ReceiptMethod. ReceiptMethod is Account Receivable (AR) object which stores information about payment methods that are receipt attributes defined and assigned by a user to receipt classes. Account Receivables System uses receipt methods to account for receipt entries and their applications. Receipt methods also determine a customer remittance bank information e.g. Cash receipt method specifies that Debit Memos should inherit Receipt Numbers and remittance bank account is Wells Fargo account 'WFg-216'; Automatic receipt method specifies to create one receipt per invoice inheriting its invoice number, and remittance bank account is Bank Of America account 'BofA-204'."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReceiptMethodReference;
Modeler.register(ElementReceiptMethodReference, "ElementReceiptMethodReference");
