var Modeler = require("../Modeler.js");
var className = 'TypeFaultingServiceType';

var TypeFaultingServiceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ID",
        type: "IdentifierType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ImplementationCode: {
      type: "TypeImplementationCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ImplementationCode",
        type: "ImplementationCodeType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InstanceID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InstanceID",
        type: "IdentifierType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ExecutionContextID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ExecutionContextID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Also known as ECID in SOA Suite. This is an ID generated for a group of service invocations/executions"
        },
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
	  ID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ID",
        type: "IdentifierType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ImplementationCode: {
      type: "TypeImplementationCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ImplementationCode",
        type: "ImplementationCodeType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InstanceID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InstanceID",
        type: "IdentifierType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ExecutionContextID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ExecutionContextID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Also known as ECID in SOA Suite. This is an ID generated for a group of service invocations/executions"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeFaultingServiceType;
Modeler.register(TypeFaultingServiceType, "TypeFaultingServiceType");
