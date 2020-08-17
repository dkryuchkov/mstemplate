var Modeler = require("../Modeler.js");
var className = 'ElementTemplateTaskReference';

var ElementTemplateTaskReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TemplateTaskReference: {
      type: "TypeTaskReferenceType",
      wsdlDefinition: {
        name: "TemplateTaskReference",
        type: "TaskReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Task which is a template for another Task. Template task is an Task with pre-filled default values."
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
	  TemplateTaskReference: {
      type: "TypeTaskReferenceType",
      wsdlDefinition: {
        name: "TemplateTaskReference",
        type: "TaskReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Task which is a template for another Task. Template task is an Task with pre-filled default values."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTemplateTaskReference;
Modeler.register(ElementTemplateTaskReference, "ElementTemplateTaskReference");
