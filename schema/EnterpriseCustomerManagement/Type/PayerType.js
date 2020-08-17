var Modeler = require("../Modeler.js");
var className = 'TypePayerType';

var TypePayerType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Custom: {
      type: "TypeCustomPayerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPayerType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PayerPersonParty: {
      type: "TypePayerPersonPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PayerPersonParty",
        type: "PayerPersonPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PayerOrganizationParty: {
      type: "TypePayerOrganizationPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PayerOrganizationParty",
        type: "PayerOrganizationPartyType",
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
	  Custom: {
      type: "TypeCustomPayerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPayerType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PayerPersonParty: {
      type: "TypePayerPersonPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PayerPersonParty",
        type: "PayerPersonPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PayerOrganizationParty: {
      type: "TypePayerOrganizationPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PayerOrganizationParty",
        type: "PayerOrganizationPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePayerType;
Modeler.register(TypePayerType, "TypePayerType");
