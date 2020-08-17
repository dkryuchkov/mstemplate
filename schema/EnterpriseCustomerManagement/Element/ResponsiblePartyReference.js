var Modeler = require("../Modeler.js");
var className = 'ElementResponsiblePartyReference';

var ElementResponsiblePartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ResponsiblePartyReference: {
      type: "TypeResponsiblePartyReferenceType",
      wsdlDefinition: {
        name: "ResponsiblePartyReference",
        type: "ResponsiblePartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The person or Party responsible for a specific activity"
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
	  ResponsiblePartyReference: {
      type: "TypeResponsiblePartyReferenceType",
      wsdlDefinition: {
        name: "ResponsiblePartyReference",
        type: "ResponsiblePartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The person or Party responsible for a specific activity"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementResponsiblePartyReference;
Modeler.register(ElementResponsiblePartyReference, "ElementResponsiblePartyReference");
