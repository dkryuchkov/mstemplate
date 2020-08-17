var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyContactReferenceType';

var TypeCustomCustomerPartyContactReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyContactReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyContactReferenceType",
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
	  CustomCustomerPartyContactReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyContactReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyContactReferenceType;
Modeler.register(TypeCustomCustomerPartyContactReferenceType, "TypeCustomCustomerPartyContactReferenceType");
