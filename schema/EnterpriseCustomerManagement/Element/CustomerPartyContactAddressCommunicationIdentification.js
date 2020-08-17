var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyContactAddressCommunicationIdentification';

var ElementCustomerPartyContactAddressCommunicationIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyContactAddressCommunicationIdentification: {
      type: "TypeCustomerPartyContactAddressCommunicationIdentificationType",
      wsdlDefinition: {
        name: "CustomerPartyContactAddressCommunicationIdentification",
        type: "CustomerPartyContactAddressCommunicationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification to an address of a CustomerParty contact."
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
	  CustomerPartyContactAddressCommunicationIdentification: {
      type: "TypeCustomerPartyContactAddressCommunicationIdentificationType",
      wsdlDefinition: {
        name: "CustomerPartyContactAddressCommunicationIdentification",
        type: "CustomerPartyContactAddressCommunicationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification to an address of a CustomerParty contact."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyContactAddressCommunicationIdentification;
Modeler.register(ElementCustomerPartyContactAddressCommunicationIdentification, "ElementCustomerPartyContactAddressCommunicationIdentification");
