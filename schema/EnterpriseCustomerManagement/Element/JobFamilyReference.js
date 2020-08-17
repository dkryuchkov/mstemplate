var Modeler = require("../Modeler.js");
var className = 'ElementJobFamilyReference';

var ElementJobFamilyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  JobFamilyReference: {
      type: "TypeJobFamilyReferenceType",
      wsdlDefinition: {
        name: "JobFamilyReference",
        type: "JobFamilyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Job Family object. Job Family is a grouping of similar jobs.\n ."
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
	  JobFamilyReference: {
      type: "TypeJobFamilyReferenceType",
      wsdlDefinition: {
        name: "JobFamilyReference",
        type: "JobFamilyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Job Family object. Job Family is a grouping of similar jobs.\n ."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementJobFamilyReference;
Modeler.register(ElementJobFamilyReference, "ElementJobFamilyReference");
