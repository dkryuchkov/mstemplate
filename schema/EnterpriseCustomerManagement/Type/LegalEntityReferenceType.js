var Modeler = require("../Modeler.js");
var className = 'TypeLegalEntityReferenceType';

var TypeLegalEntityReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LegalEntityIdentification: {
      type: "TypeLegalEntityIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LegalEntityIdentification",
        type: "LegalEntityIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomLegalEntityReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomLegalEntityReferenceType",
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
	  LegalEntityIdentification: {
      type: "TypeLegalEntityIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LegalEntityIdentification",
        type: "LegalEntityIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomLegalEntityReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomLegalEntityReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeLegalEntityReferenceType;
Modeler.register(TypeLegalEntityReferenceType, "TypeLegalEntityReferenceType");
