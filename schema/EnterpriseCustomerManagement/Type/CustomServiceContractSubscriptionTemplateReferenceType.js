var Modeler = require("../Modeler.js");
var className = 'TypeCustomServiceContractSubscriptionTemplateReferenceType';

var TypeCustomServiceContractSubscriptionTemplateReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomServiceContractSubscriptionTemplateReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomServiceContractSubscriptionTemplateReferenceType",
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
	  CustomServiceContractSubscriptionTemplateReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomServiceContractSubscriptionTemplateReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomServiceContractSubscriptionTemplateReferenceType;
Modeler.register(TypeCustomServiceContractSubscriptionTemplateReferenceType, "TypeCustomServiceContractSubscriptionTemplateReferenceType");
