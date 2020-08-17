var Modeler = require("../Modeler.js");
var className = 'ElementProjectSchedulableResourceIdentification';

var ElementProjectSchedulableResourceIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProjectSchedulableResourceIdentification: {
      type: "TypeProjectSchedulableResourceIdentificationType",
      wsdlDefinition: {
        name: "ProjectSchedulableResourceIdentification",
        type: "ProjectSchedulableResourceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Project Schedulable Resource within the Project Resource List object"
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
	  ProjectSchedulableResourceIdentification: {
      type: "TypeProjectSchedulableResourceIdentificationType",
      wsdlDefinition: {
        name: "ProjectSchedulableResourceIdentification",
        type: "ProjectSchedulableResourceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Project Schedulable Resource within the Project Resource List object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProjectSchedulableResourceIdentification;
Modeler.register(ElementProjectSchedulableResourceIdentification, "ElementProjectSchedulableResourceIdentification");
