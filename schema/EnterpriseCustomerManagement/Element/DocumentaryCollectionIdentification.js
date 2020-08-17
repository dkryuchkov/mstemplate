var Modeler = require("../Modeler.js");
var className = 'ElementDocumentaryCollectionIdentification';

var ElementDocumentaryCollectionIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DocumentaryCollectionIdentification: {
      type: "TypeDocumentaryCollectionIdentificationType",
      wsdlDefinition: {
        name: "DocumentaryCollectionIdentification",
        type: "DocumentaryCollectionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Documentary Collection object",
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
	  DocumentaryCollectionIdentification: {
      type: "TypeDocumentaryCollectionIdentificationType",
      wsdlDefinition: {
        name: "DocumentaryCollectionIdentification",
        type: "DocumentaryCollectionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Documentary Collection object",
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

module.exports = ElementDocumentaryCollectionIdentification;
Modeler.register(ElementDocumentaryCollectionIdentification, "ElementDocumentaryCollectionIdentification");
