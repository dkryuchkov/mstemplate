var Modeler = require("../Modeler.js");
var className = 'TypeServiceContractSubscriptionTemplateReferenceType';

var TypeServiceContractSubscriptionTemplateReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ServiceContractSubscriptionTemplateIdentification: {
      type: "TypeServiceContractSubscriptionTemplateIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ServiceContractSubscriptionTemplateIdentification",
        type: "ServiceContractSubscriptionTemplateIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomServiceContractSubscriptionTemplateReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomServiceContractSubscriptionTemplateReferenceType",
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
	  ServiceContractSubscriptionTemplateIdentification: {
      type: "TypeServiceContractSubscriptionTemplateIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ServiceContractSubscriptionTemplateIdentification",
        type: "ServiceContractSubscriptionTemplateIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomServiceContractSubscriptionTemplateReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomServiceContractSubscriptionTemplateReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeServiceContractSubscriptionTemplateReferenceType;
Modeler.register(TypeServiceContractSubscriptionTemplateReferenceType, "TypeServiceContractSubscriptionTemplateReferenceType");
