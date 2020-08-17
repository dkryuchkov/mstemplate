var Modeler = require("../Modeler.js");
var className = 'ElementJobReference';

var ElementJobReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  JobReference: {
      type: "TypeJobReferenceType",
      wsdlDefinition: {
        name: "JobReference",
        type: "JobReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a job in an enterprise\n ."
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
	  JobReference: {
      type: "TypeJobReferenceType",
      wsdlDefinition: {
        name: "JobReference",
        type: "JobReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a job in an enterprise\n ."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementJobReference;
Modeler.register(ElementJobReference, "ElementJobReference");
