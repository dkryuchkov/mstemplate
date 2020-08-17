var Modeler = require("../Modeler.js");
var className = 'ElementCompensationPackageTemplateReference';

var ElementCompensationPackageTemplateReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CompensationPackageTemplateReference: {
      type: "TypeCompensationPackageTemplateReferenceType",
      wsdlDefinition: {
        name: "CompensationPackageTemplateReference",
        type: "CompensationPackageTemplateReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Compensation Package Template object. Compensation package templates define groups of compensation components to use as defaults for  employees that qualify for similar compensation packages. For example, there may be a compensation package template for executives, another for sales managers, and  another for administrative assistants. Typically used in Australia"
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
	  CompensationPackageTemplateReference: {
      type: "TypeCompensationPackageTemplateReferenceType",
      wsdlDefinition: {
        name: "CompensationPackageTemplateReference",
        type: "CompensationPackageTemplateReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Compensation Package Template object. Compensation package templates define groups of compensation components to use as defaults for  employees that qualify for similar compensation packages. For example, there may be a compensation package template for executives, another for sales managers, and  another for administrative assistants. Typically used in Australia"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCompensationPackageTemplateReference;
Modeler.register(ElementCompensationPackageTemplateReference, "ElementCompensationPackageTemplateReference");
