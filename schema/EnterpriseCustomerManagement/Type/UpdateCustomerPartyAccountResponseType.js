var Modeler = require("../Modeler.js");
var className = 'TypeUpdateCustomerPartyAccountResponseType';

var TypeUpdateCustomerPartyAccountResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PartyLocation: {
      type: "TypePartyLocationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PartyLocation",
        type: "PartyLocationType",
        "xsd:annotation": {
          "xsd:documentation": "Locations of the Party"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PartyContact: {
      type: "TypePartyContactType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PartyContact",
        type: "PartyContactType",
        "xsd:annotation": {
          "xsd:documentation": "Contacts of the Party"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PartyRelatedParty: {
      type: "TypePartyRelatedPartyType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PartyRelatedParty",
        type: "PartyRelatedPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Person: {
      type: "TypePersonType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Person",
        type: "PersonType",
        "xsd:annotation": {
          "xsd:documentation": "An individual"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Organization: {
      type: "TypeOrganizationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Organization",
        type: "OrganizationType",
        "xsd:annotation": {
          "xsd:documentation": "An organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CustomerPartyAccount: {
      type: "TypeCustomerPartyAccountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyAccount",
        type: "CustomerPartyAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Financial arrangement that a person or organization has with deploying company to buy products and services e.g. John's buying account at Amazon, Dell's buying account at Oracle"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyEBOType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyEBOType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    undefined: {
      type: "string",
      wsdlDefinition: {
        base: "CustomerPartyAccountEBMType",
        attribute: false,
        type: "xsd:string"
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
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PartyLocation: {
      type: "TypePartyLocationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PartyLocation",
        type: "PartyLocationType",
        "xsd:annotation": {
          "xsd:documentation": "Locations of the Party"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PartyContact: {
      type: "TypePartyContactType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PartyContact",
        type: "PartyContactType",
        "xsd:annotation": {
          "xsd:documentation": "Contacts of the Party"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PartyRelatedParty: {
      type: "TypePartyRelatedPartyType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PartyRelatedParty",
        type: "PartyRelatedPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Person: {
      type: "TypePersonType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Person",
        type: "PersonType",
        "xsd:annotation": {
          "xsd:documentation": "An individual"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Organization: {
      type: "TypeOrganizationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Organization",
        type: "OrganizationType",
        "xsd:annotation": {
          "xsd:documentation": "An organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CustomerPartyAccount: {
      type: "TypeCustomerPartyAccountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyAccount",
        type: "CustomerPartyAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Financial arrangement that a person or organization has with deploying company to buy products and services e.g. John's buying account at Amazon, Dell's buying account at Oracle"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyEBOType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyEBOType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    undefined: {
      type: "string",
      wsdlDefinition: {
        base: "CustomerPartyAccountEBMType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeUpdateCustomerPartyAccountResponseType;
Modeler.register(TypeUpdateCustomerPartyAccountResponseType, "TypeUpdateCustomerPartyAccountResponseType");
