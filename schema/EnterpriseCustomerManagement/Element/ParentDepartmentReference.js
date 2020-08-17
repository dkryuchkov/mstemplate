var Modeler = require("../Modeler.js");
var className = 'ElementParentDepartmentReference';

var ElementParentDepartmentReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentDepartmentReference: {
      type: "TypeDepartmentReferenceType",
      wsdlDefinition: {
        name: "ParentDepartmentReference",
        type: "DepartmentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the parent department of a department within an enterprise for budgeting purposes"
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
	  ParentDepartmentReference: {
      type: "TypeDepartmentReferenceType",
      wsdlDefinition: {
        name: "ParentDepartmentReference",
        type: "DepartmentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the parent department of a department within an enterprise for budgeting purposes"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentDepartmentReference;
Modeler.register(ElementParentDepartmentReference, "ElementParentDepartmentReference");
