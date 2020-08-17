var Modeler = require("../Modeler.js");
var className = 'TypeBankPartyReferenceType';

var TypeBankPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PartyIdentification: {
      type: "TypePartyIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PartyIdentification",
        type: "PartyIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OrganizationName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:OrganizationName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the Organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    LocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LocationReference",
        type: "LocationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Contact: {
      type: "TypeContactType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Contact",
        type: "ContactType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SWIFTCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SWIFTCode",
        type: "CodeType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RoutingNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RoutingNumber",
        type: "IdentifierType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomBankPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBankPartyReferenceType",
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
	  PartyIdentification: {
      type: "TypePartyIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PartyIdentification",
        type: "PartyIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OrganizationName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:OrganizationName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the Organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    LocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LocationReference",
        type: "LocationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Contact: {
      type: "TypeContactType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Contact",
        type: "ContactType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SWIFTCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SWIFTCode",
        type: "CodeType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RoutingNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RoutingNumber",
        type: "IdentifierType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomBankPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBankPartyReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeBankPartyReferenceType;
Modeler.register(TypeBankPartyReferenceType, "TypeBankPartyReferenceType");
