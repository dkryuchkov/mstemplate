var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerAgentPartyReferenceType';

var TypeCustomCustomerAgentPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerAgentPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerAgentPartyReferenceType",
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
	  CustomCustomerAgentPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerAgentPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerAgentPartyReferenceType;
Modeler.register(TypeCustomCustomerAgentPartyReferenceType, "TypeCustomCustomerAgentPartyReferenceType");
