var Modeler = require("../Modeler.js");
var className = 'ElementDocumentaryCreditReference';

var ElementDocumentaryCreditReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DocumentaryCreditReference: {
      type: "TypeDocumentaryCreditReferenceType",
      wsdlDefinition: {
        name: "DocumentaryCreditReference",
        type: "DocumentaryCreditReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Documentary Credit object. It is a written undertaking by the issuing bank, on behalf of the buyer (applicant/customer), promising to pay the seller (beneficiary) up to a stated sum of money, within a prescribed time limit and against stipulated documents. e.g. bill of lading, customs clearance document etc.",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
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
	  DocumentaryCreditReference: {
      type: "TypeDocumentaryCreditReferenceType",
      wsdlDefinition: {
        name: "DocumentaryCreditReference",
        type: "DocumentaryCreditReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Documentary Credit object. It is a written undertaking by the issuing bank, on behalf of the buyer (applicant/customer), promising to pay the seller (beneficiary) up to a stated sum of money, within a prescribed time limit and against stipulated documents. e.g. bill of lading, customs clearance document etc.",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDocumentaryCreditReference;
Modeler.register(ElementDocumentaryCreditReference, "ElementDocumentaryCreditReference");
