var Modeler = require("../Modeler.js");
var className = 'ElementDesignatedAgentContact';

var ElementDesignatedAgentContact = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DesignatedAgentContact: {
      type: "TypeContactType",
      wsdlDefinition: {
        name: "DesignatedAgentContact",
        type: "ContactType",
        "xsd:annotation": {
          "xsd:documentation": "Contact information of a designated agent (may be used for Fedral Government) for an entity such as organization or location. As an example, in Payroll, a designated agent can be the person to whom paychecks are mailed for distribution or in another example it is a legal contact for an organization."
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
	  DesignatedAgentContact: {
      type: "TypeContactType",
      wsdlDefinition: {
        name: "DesignatedAgentContact",
        type: "ContactType",
        "xsd:annotation": {
          "xsd:documentation": "Contact information of a designated agent (may be used for Fedral Government) for an entity such as organization or location. As an example, in Payroll, a designated agent can be the person to whom paychecks are mailed for distribution or in another example it is a legal contact for an organization."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDesignatedAgentContact;
Modeler.register(ElementDesignatedAgentContact, "ElementDesignatedAgentContact");
