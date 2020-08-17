var Modeler = require("../Modeler.js");
var className = 'ElementProjectNonSchedulableResourceIdentification';

var ElementProjectNonSchedulableResourceIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProjectNonSchedulableResourceIdentification: {
      type: "TypeProjectNonSchedulableResourceIdentificationType",
      wsdlDefinition: {
        name: "ProjectNonSchedulableResourceIdentification",
        type: "ProjectNonSchedulableResourceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Project Non-Schedulable Resource within the Project Resource Set object"
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
	  ProjectNonSchedulableResourceIdentification: {
      type: "TypeProjectNonSchedulableResourceIdentificationType",
      wsdlDefinition: {
        name: "ProjectNonSchedulableResourceIdentification",
        type: "ProjectNonSchedulableResourceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Project Non-Schedulable Resource within the Project Resource Set object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProjectNonSchedulableResourceIdentification;
Modeler.register(ElementProjectNonSchedulableResourceIdentification, "ElementProjectNonSchedulableResourceIdentification");
