var Modeler = require("../Modeler.js");
var className = 'ElementDocumentaryCreditIdentification';

var ElementDocumentaryCreditIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DocumentaryCreditIdentification: {
      type: "TypeDocumentaryCreditIdentificationType",
      wsdlDefinition: {
        name: "DocumentaryCreditIdentification",
        type: "DocumentaryCreditIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Documentary Credit object",
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
	  DocumentaryCreditIdentification: {
      type: "TypeDocumentaryCreditIdentificationType",
      wsdlDefinition: {
        name: "DocumentaryCreditIdentification",
        type: "DocumentaryCreditIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Documentary Credit object",
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

module.exports = ElementDocumentaryCreditIdentification;
Modeler.register(ElementDocumentaryCreditIdentification, "ElementDocumentaryCreditIdentification");
