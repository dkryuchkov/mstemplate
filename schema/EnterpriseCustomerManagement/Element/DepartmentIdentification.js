var Modeler = require("../Modeler.js");
var className = 'ElementDepartmentIdentification';

var ElementDepartmentIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DepartmentIdentification: {
      type: "TypeDepartmentIdentificationType",
      wsdlDefinition: {
        name: "DepartmentIdentification",
        type: "DepartmentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies a department within an enterprise"
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
	  DepartmentIdentification: {
      type: "TypeDepartmentIdentificationType",
      wsdlDefinition: {
        name: "DepartmentIdentification",
        type: "DepartmentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies a department within an enterprise"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDepartmentIdentification;
Modeler.register(ElementDepartmentIdentification, "ElementDepartmentIdentification");
