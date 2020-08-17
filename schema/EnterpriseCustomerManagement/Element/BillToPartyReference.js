var Modeler = require("../Modeler.js");
var className = 'ElementBillToPartyReference';

var ElementBillToPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BillToPartyReference: {
      type: "TypeBillToPartyReferenceType",
      wsdlDefinition: {
        name: "BillToPartyReference",
        type: "BillToPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The party designated on purchase order, invoice, or bill of lading as the one to whom the bill should be sent for payment"
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
	  BillToPartyReference: {
      type: "TypeBillToPartyReferenceType",
      wsdlDefinition: {
        name: "BillToPartyReference",
        type: "BillToPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The party designated on purchase order, invoice, or bill of lading as the one to whom the bill should be sent for payment"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBillToPartyReference;
Modeler.register(ElementBillToPartyReference, "ElementBillToPartyReference");
