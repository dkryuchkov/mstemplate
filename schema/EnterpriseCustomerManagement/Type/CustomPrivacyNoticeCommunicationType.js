var Modeler = require("../Modeler.js");
var className = 'TypeCustomPrivacyNoticeCommunicationType';

var TypeCustomPrivacyNoticeCommunicationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPrivacyNoticeCommunicationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPrivacyNoticeCommunicationType",
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
	  CustomPrivacyNoticeCommunicationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPrivacyNoticeCommunicationType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPrivacyNoticeCommunicationType;
Modeler.register(TypeCustomPrivacyNoticeCommunicationType, "TypeCustomPrivacyNoticeCommunicationType");
