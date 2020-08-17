var Modeler = require("../Modeler.js");
var className = 'TypeEstablishmentReferenceType';

var TypeEstablishmentReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EstablishmentIdentification: {
      type: "TypeEstablishmentIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EstablishmentIdentification",
        type: "EstablishmentIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomEstablishmentReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomEstablishmentReferenceType",
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
	  EstablishmentIdentification: {
      type: "TypeEstablishmentIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EstablishmentIdentification",
        type: "EstablishmentIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomEstablishmentReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomEstablishmentReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeEstablishmentReferenceType;
Modeler.register(TypeEstablishmentReferenceType, "TypeEstablishmentReferenceType");
