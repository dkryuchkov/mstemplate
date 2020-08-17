var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyPrivacyProfileType';

var TypeCustomCustomerPartyPrivacyProfileType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyPrivacyProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyPrivacyProfileType",
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
	  CustomCustomerPartyPrivacyProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyPrivacyProfileType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyPrivacyProfileType;
Modeler.register(TypeCustomCustomerPartyPrivacyProfileType, "TypeCustomCustomerPartyPrivacyProfileType");
