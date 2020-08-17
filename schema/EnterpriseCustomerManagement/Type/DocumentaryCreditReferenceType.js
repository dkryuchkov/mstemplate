var Modeler = require("../Modeler.js");
var className = 'TypeDocumentaryCreditReferenceType';

var TypeDocumentaryCreditReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DocumentaryCreditIdentification: {
      type: "TypeDocumentaryCreditIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DocumentaryCreditIdentification",
        type: "DocumentaryCreditIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomDocumentaryCreditReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomDocumentaryCreditReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:DocumentaryCreditIdentification",
        type: "DocumentaryCreditIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomDocumentaryCreditReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomDocumentaryCreditReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDocumentaryCreditReferenceType;
Modeler.register(TypeDocumentaryCreditReferenceType, "TypeDocumentaryCreditReferenceType");
