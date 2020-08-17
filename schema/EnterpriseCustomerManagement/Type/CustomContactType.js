var Modeler = require("../Modeler.js");
var className = 'TypeCustomContactType';

var TypeCustomContactType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ListOfContactIdentifier: {
      type: "TypeListOfContactIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ListOfContactIdentifier",
        type: "ListOfContactIdentifierType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ListOfContactNames: {
      type: "TypeListOfContactNamesType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ListOfContactNames",
        type: "ListOfContactNamesType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ListOfContactPoint: {
      type: "TypeListOfContactPointType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ListOfContactPoint",
        type: "ListOfContactPointType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ListOfContactCommPreference: {
      type: "TypeListOfContactCommPreferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ListOfContactCommPreference",
        type: "ListOfContactCommPreferenceType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ListOfContactInterestedProducts: {
      type: "TypeListOfContactInterestedProductsType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ListOfContactInterestedProducts",
        type: "ListOfContactInterestedProductsType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ListOfContactMktConsent: {
      type: "TypeListOfContactMktConsentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ListOfContactMktConsent",
        type: "ListOfContactMktConsentType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Driver: {
      type: "TypeDriverType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Driver",
        type: "DriverType",
        attribute: false,
        ns: "corecomcust"
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
	  ListOfContactIdentifier: {
      type: "TypeListOfContactIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ListOfContactIdentifier",
        type: "ListOfContactIdentifierType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ListOfContactNames: {
      type: "TypeListOfContactNamesType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ListOfContactNames",
        type: "ListOfContactNamesType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ListOfContactPoint: {
      type: "TypeListOfContactPointType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ListOfContactPoint",
        type: "ListOfContactPointType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ListOfContactCommPreference: {
      type: "TypeListOfContactCommPreferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ListOfContactCommPreference",
        type: "ListOfContactCommPreferenceType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ListOfContactInterestedProducts: {
      type: "TypeListOfContactInterestedProductsType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ListOfContactInterestedProducts",
        type: "ListOfContactInterestedProductsType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ListOfContactMktConsent: {
      type: "TypeListOfContactMktConsentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ListOfContactMktConsent",
        type: "ListOfContactMktConsentType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Driver: {
      type: "TypeDriverType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Driver",
        type: "DriverType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomContactType;
Modeler.register(TypeCustomContactType, "TypeCustomContactType");
