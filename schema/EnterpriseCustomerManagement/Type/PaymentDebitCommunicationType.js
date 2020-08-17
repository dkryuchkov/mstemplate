var Modeler = require("../Modeler.js");
var className = 'TypePaymentDebitCommunicationType';

var TypePaymentDebitCommunicationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPaymentDebitCommunicationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPaymentDebitCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PhoneCommunication: {
      type: "TypePhoneCommunicationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PhoneCommunication",
        type: "PhoneCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Phone Communication used by the payee to deliver the Debit notification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FaxCommunication: {
      type: "TypeFaxCommunicationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FaxCommunication",
        type: "FaxCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Fax Communication used by the payee to deliver the Debit notification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EmailCommunication: {
      type: "TypeEmailCommunicationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EmailCommunication",
        type: "EmailCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Email Communication used by the payee to deliver the Debit notification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "ActionCodeType",
        attribute: true
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
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPaymentDebitCommunicationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPaymentDebitCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PhoneCommunication: {
      type: "TypePhoneCommunicationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PhoneCommunication",
        type: "PhoneCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Phone Communication used by the payee to deliver the Debit notification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FaxCommunication: {
      type: "TypeFaxCommunicationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FaxCommunication",
        type: "FaxCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Fax Communication used by the payee to deliver the Debit notification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EmailCommunication: {
      type: "TypeEmailCommunicationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EmailCommunication",
        type: "EmailCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Email Communication used by the payee to deliver the Debit notification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "ActionCodeType",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePaymentDebitCommunicationType;
Modeler.register(TypePaymentDebitCommunicationType, "TypePaymentDebitCommunicationType");
