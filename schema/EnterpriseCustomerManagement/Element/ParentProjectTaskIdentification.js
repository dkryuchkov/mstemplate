var Modeler = require("../Modeler.js");
var className = 'ElementParentProjectTaskIdentification';

var ElementParentProjectTaskIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentProjectTaskIdentification: {
      type: "TypeTaskIdentificationType",
      wsdlDefinition: {
        name: "ParentProjectTaskIdentification",
        type: "TaskIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies of a Task which is a parent of the containing Task within a Project"
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
	  ParentProjectTaskIdentification: {
      type: "TypeTaskIdentificationType",
      wsdlDefinition: {
        name: "ParentProjectTaskIdentification",
        type: "TaskIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies of a Task which is a parent of the containing Task within a Project"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentProjectTaskIdentification;
Modeler.register(ElementParentProjectTaskIdentification, "ElementParentProjectTaskIdentification");
