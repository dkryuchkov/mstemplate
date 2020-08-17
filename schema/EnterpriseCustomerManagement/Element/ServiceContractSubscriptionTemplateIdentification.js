var Modeler = require("../Modeler.js");
var className = 'ElementServiceContractSubscriptionTemplateIdentification';

var ElementServiceContractSubscriptionTemplateIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ServiceContractSubscriptionTemplateIdentification: {
      type: "TypeServiceContractSubscriptionTemplateIdentificationType",
      wsdlDefinition: {
        name: "ServiceContractSubscriptionTemplateIdentification",
        type: "ServiceContractSubscriptionTemplateIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Service Contract Subscription Template"
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
	  ServiceContractSubscriptionTemplateIdentification: {
      type: "TypeServiceContractSubscriptionTemplateIdentificationType",
      wsdlDefinition: {
        name: "ServiceContractSubscriptionTemplateIdentification",
        type: "ServiceContractSubscriptionTemplateIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Service Contract Subscription Template"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementServiceContractSubscriptionTemplateIdentification;
Modeler.register(ElementServiceContractSubscriptionTemplateIdentification, "ElementServiceContractSubscriptionTemplateIdentification");
