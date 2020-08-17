var Modeler = require("../Modeler.js");
var className = 'ElementJobFamilyIdentification';

var ElementJobFamilyIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  JobFamilyIdentification: {
      type: "TypeJobFamilyIdentificationType",
      wsdlDefinition: {
        name: "JobFamilyIdentification",
        type: "JobFamilyIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Job Family object"
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
	  JobFamilyIdentification: {
      type: "TypeJobFamilyIdentificationType",
      wsdlDefinition: {
        name: "JobFamilyIdentification",
        type: "JobFamilyIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Job Family object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementJobFamilyIdentification;
Modeler.register(ElementJobFamilyIdentification, "ElementJobFamilyIdentification");
