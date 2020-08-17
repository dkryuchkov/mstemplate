var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartySupportTeamMemberType';

var TypeCustomCustomerPartySupportTeamMemberType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartySupportTeamMemberType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartySupportTeamMemberType",
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
	  CustomCustomerPartySupportTeamMemberType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartySupportTeamMemberType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartySupportTeamMemberType;
Modeler.register(TypeCustomCustomerPartySupportTeamMemberType, "TypeCustomCustomerPartySupportTeamMemberType");
