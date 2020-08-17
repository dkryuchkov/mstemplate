var Modeler = require("../Modeler.js");
var className = 'ElementJobIdentification';

var ElementJobIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  JobIdentification: {
      type: "TypeJobIdentificationType",
      wsdlDefinition: {
        name: "JobIdentification",
        type: "JobIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies a job"
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
	  JobIdentification: {
      type: "TypeJobIdentificationType",
      wsdlDefinition: {
        name: "JobIdentification",
        type: "JobIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies a job"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementJobIdentification;
Modeler.register(ElementJobIdentification, "ElementJobIdentification");
