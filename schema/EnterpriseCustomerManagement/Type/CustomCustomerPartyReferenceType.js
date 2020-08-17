var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyReferenceType';

var TypeCustomCustomerPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyReferenceType",
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
	  CustomCustomerPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyReferenceType;
Modeler.register(TypeCustomCustomerPartyReferenceType, "TypeCustomCustomerPartyReferenceType");
