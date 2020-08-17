var Modeler = require("../Modeler.js");
var className = 'ElementParentProjectSchedulableResourceIdentification';

var ElementParentProjectSchedulableResourceIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentProjectSchedulableResourceIdentification: {
      type: "TypeProjectSchedulableResourceIdentificationType",
      wsdlDefinition: {
        name: "ParentProjectSchedulableResourceIdentification",
        type: "ProjectSchedulableResourceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Project Schedulable Resource which is a parent of the containing Project Schedulable Resource"
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
	  ParentProjectSchedulableResourceIdentification: {
      type: "TypeProjectSchedulableResourceIdentificationType",
      wsdlDefinition: {
        name: "ParentProjectSchedulableResourceIdentification",
        type: "ProjectSchedulableResourceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Project Schedulable Resource which is a parent of the containing Project Schedulable Resource"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentProjectSchedulableResourceIdentification;
Modeler.register(ElementParentProjectSchedulableResourceIdentification, "ElementParentProjectSchedulableResourceIdentification");
