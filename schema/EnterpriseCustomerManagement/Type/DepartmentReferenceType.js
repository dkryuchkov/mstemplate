var Modeler = require("../Modeler.js");
var className = 'TypeDepartmentReferenceType';

var TypeDepartmentReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DepartmentIdentification: {
      type: "TypeDepartmentIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DepartmentIdentification",
        type: "DepartmentIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OrganizationUnitIdentification: {
      type: "TypeOrganizationUnitIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OrganizationUnitIdentification",
        type: "OrganizationUnitIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Organization Unit. A Department is an OrganizationUnit with Department specific properties. The relation between a Department and the OrganizationUnit is 1 to 1. This identification can be veiwed as an alternate identification of the Department. It is important to have this identification when an OrganizationUnit can have multiple behaviors/classifications, e.g., being both a Department, BusinessUnit, etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomDepartmentReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomDepartmentReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:DepartmentIdentification",
        type: "DepartmentIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OrganizationUnitIdentification: {
      type: "TypeOrganizationUnitIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OrganizationUnitIdentification",
        type: "OrganizationUnitIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Organization Unit. A Department is an OrganizationUnit with Department specific properties. The relation between a Department and the OrganizationUnit is 1 to 1. This identification can be veiwed as an alternate identification of the Department. It is important to have this identification when an OrganizationUnit can have multiple behaviors/classifications, e.g., being both a Department, BusinessUnit, etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomDepartmentReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomDepartmentReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDepartmentReferenceType;
Modeler.register(TypeDepartmentReferenceType, "TypeDepartmentReferenceType");
