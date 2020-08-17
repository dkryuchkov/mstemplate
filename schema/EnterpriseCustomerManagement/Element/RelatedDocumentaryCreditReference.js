var Modeler = require("../Modeler.js");
var className = 'ElementRelatedDocumentaryCreditReference';

var ElementRelatedDocumentaryCreditReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RelatedDocumentaryCreditReference: {
      type: "TypeDocumentaryCreditReferenceType",
      wsdlDefinition: {
        name: "RelatedDocumentaryCreditReference",
        type: "DocumentaryCreditReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Documentary Credit object which is related to another Documentary Credit object such as a shipping Documentary Credit is captured as related to the an import Documentary Credit.",
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
	  RelatedDocumentaryCreditReference: {
      type: "TypeDocumentaryCreditReferenceType",
      wsdlDefinition: {
        name: "RelatedDocumentaryCreditReference",
        type: "DocumentaryCreditReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Documentary Credit object which is related to another Documentary Credit object such as a shipping Documentary Credit is captured as related to the an import Documentary Credit.",
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

module.exports = ElementRelatedDocumentaryCreditReference;
Modeler.register(ElementRelatedDocumentaryCreditReference, "ElementRelatedDocumentaryCreditReference");
