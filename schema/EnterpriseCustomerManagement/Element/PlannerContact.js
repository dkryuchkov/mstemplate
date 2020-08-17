var Modeler = require("../Modeler.js");
var className = 'ElementPlannerContact';

var ElementPlannerContact = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PlannerContact: {
      type: "TypeContactType",
      wsdlDefinition: {
        name: "PlannerContact",
        type: "ContactType",
        "xsd:annotation": {
          "xsd:documentation": "A person or department that performs the function of a planner"
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
	  PlannerContact: {
      type: "TypeContactType",
      wsdlDefinition: {
        name: "PlannerContact",
        type: "ContactType",
        "xsd:annotation": {
          "xsd:documentation": "A person or department that performs the function of a planner"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPlannerContact;
Modeler.register(ElementPlannerContact, "ElementPlannerContact");
