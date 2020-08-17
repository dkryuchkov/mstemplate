var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyAccountReferenceType';

var TypeCustomCustomerPartyAccountReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyAccountReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAccountReferenceType",
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
	  CustomCustomerPartyAccountReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAccountReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyAccountReferenceType;
Modeler.register(TypeCustomCustomerPartyAccountReferenceType, "TypeCustomCustomerPartyAccountReferenceType");
