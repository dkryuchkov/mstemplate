var Modeler = require("../Modeler.js");
var className = 'TypeDocumentaryCollectionReferenceType';

var TypeDocumentaryCollectionReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DocumentaryCollectionIdentification: {
      type: "TypeDocumentaryCollectionIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DocumentaryCollectionIdentification",
        type: "DocumentaryCollectionIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomDocumentaryCollectionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomDocumentaryCollectionReferenceType",
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
	  DocumentaryCollectionIdentification: {
      type: "TypeDocumentaryCollectionIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DocumentaryCollectionIdentification",
        type: "DocumentaryCollectionIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomDocumentaryCollectionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomDocumentaryCollectionReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDocumentaryCollectionReferenceType;
Modeler.register(TypeDocumentaryCollectionReferenceType, "TypeDocumentaryCollectionReferenceType");
