var Modeler = require("../Modeler.js");
var className = 'ElementSupportTeamReference';

var ElementSupportTeamReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SupportTeamReference: {
      type: "TypeSupportTeamReferenceType",
      wsdlDefinition: {
        name: "SupportTeamReference",
        type: "SupportTeamReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Support Team responsible for resolving customer issues"
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
	  SupportTeamReference: {
      type: "TypeSupportTeamReferenceType",
      wsdlDefinition: {
        name: "SupportTeamReference",
        type: "SupportTeamReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Support Team responsible for resolving customer issues"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSupportTeamReference;
Modeler.register(ElementSupportTeamReference, "ElementSupportTeamReference");
