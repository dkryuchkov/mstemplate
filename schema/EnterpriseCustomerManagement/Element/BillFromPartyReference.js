var Modeler = require("../Modeler.js");
var className = 'ElementBillFromPartyReference';

var ElementBillFromPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BillFromPartyReference: {
      type: "TypeBillFromPartyReferenceType",
      wsdlDefinition: {
        name: "BillFromPartyReference",
        type: "BillFromPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The party designated on purchase order, invoice, or bill of lading as the one that is responsible for issuing the bill or invoice related to the transaction"
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
	  BillFromPartyReference: {
      type: "TypeBillFromPartyReferenceType",
      wsdlDefinition: {
        name: "BillFromPartyReference",
        type: "BillFromPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The party designated on purchase order, invoice, or bill of lading as the one that is responsible for issuing the bill or invoice related to the transaction"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBillFromPartyReference;
Modeler.register(ElementBillFromPartyReference, "ElementBillFromPartyReference");
