var Modeler = require("../Modeler.js");
var className = 'ElementDepartmentReference';

var ElementDepartmentReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DepartmentReference: {
      type: "TypeDepartmentReferenceType",
      wsdlDefinition: {
        name: "DepartmentReference",
        type: "DepartmentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a department in an enterprise"
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
	  DepartmentReference: {
      type: "TypeDepartmentReferenceType",
      wsdlDefinition: {
        name: "DepartmentReference",
        type: "DepartmentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a department in an enterprise"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDepartmentReference;
Modeler.register(ElementDepartmentReference, "ElementDepartmentReference");
