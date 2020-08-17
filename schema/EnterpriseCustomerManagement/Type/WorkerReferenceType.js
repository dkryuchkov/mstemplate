var Modeler = require("../Modeler.js");
var className = 'TypeWorkerReferenceType';

var TypeWorkerReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WorkerIdentification: {
      type: "TypeWorkerIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WorkerIdentification",
        type: "WorkerIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PersonName: {
      type: "TypePersonNameType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PersonName",
        type: "PersonNameType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PhoneCommunication: {
      type: "TypePhoneCommunicationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PhoneCommunication",
        type: "PhoneCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    EmailCommunication: {
      type: "TypeEmailCommunicationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EmailCommunication",
        type: "EmailCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomWorkerReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomWorkerReferenceType",
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
	  WorkerIdentification: {
      type: "TypeWorkerIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WorkerIdentification",
        type: "WorkerIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PersonName: {
      type: "TypePersonNameType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PersonName",
        type: "PersonNameType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PhoneCommunication: {
      type: "TypePhoneCommunicationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PhoneCommunication",
        type: "PhoneCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    EmailCommunication: {
      type: "TypeEmailCommunicationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EmailCommunication",
        type: "EmailCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomWorkerReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomWorkerReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeWorkerReferenceType;
Modeler.register(TypeWorkerReferenceType, "TypeWorkerReferenceType");
