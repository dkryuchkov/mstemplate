var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartySupportTeamMember';

var ElementCustomerPartySupportTeamMember = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartySupportTeamMember: {
      type: "TypeCustomerPartySupportTeamMemberType",
      wsdlDefinition: {
        name: "CustomerPartySupportTeamMember",
        type: "CustomerPartySupportTeamMemberType",
        "xsd:annotation": {
          "xsd:documentation": "Represents the sales representatives, marketing personnel associated with the customer"
        },
        ns: "WL5G3N1",
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
	  CustomerPartySupportTeamMember: {
      type: "TypeCustomerPartySupportTeamMemberType",
      wsdlDefinition: {
        name: "CustomerPartySupportTeamMember",
        type: "CustomerPartySupportTeamMemberType",
        "xsd:annotation": {
          "xsd:documentation": "Represents the sales representatives, marketing personnel associated with the customer"
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartySupportTeamMember;
Modeler.register(ElementCustomerPartySupportTeamMember, "ElementCustomerPartySupportTeamMember");
