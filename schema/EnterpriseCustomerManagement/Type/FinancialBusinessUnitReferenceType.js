var Modeler = require("../Modeler.js");
var className = 'TypeFinancialBusinessUnitReferenceType';

var TypeFinancialBusinessUnitReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BusinessUnitIdentification: {
      type: "TypeBusinessUnitIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BusinessUnitIdentification",
        type: "BusinessUnitIdentificationType",
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
          "xsd:documentation": "Unique identification of an Organization Unit. A BusinessUnit is an OrganizationUnit with BusinessUnit specific properties. The relation between a BusinessUnit and the OrganizationUnit is 1 to 1. This identification can be veiwed as an alternate identification of the BusinessUnit. It is important to have this identification when an OrganizationUnit can have multiple behaviors/classifications, e.g., being both BusinessUnit and InventoryOrganizationUnit."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomBusinessUnitReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBusinessUnitReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    undefined: {
      type: "string",
      wsdlDefinition: {
        base: "BusinessUnitReferenceType",
        attribute: false,
        type: "xsd:string"
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
	  BusinessUnitIdentification: {
      type: "TypeBusinessUnitIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BusinessUnitIdentification",
        type: "BusinessUnitIdentificationType",
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
          "xsd:documentation": "Unique identification of an Organization Unit. A BusinessUnit is an OrganizationUnit with BusinessUnit specific properties. The relation between a BusinessUnit and the OrganizationUnit is 1 to 1. This identification can be veiwed as an alternate identification of the BusinessUnit. It is important to have this identification when an OrganizationUnit can have multiple behaviors/classifications, e.g., being both BusinessUnit and InventoryOrganizationUnit."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomBusinessUnitReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBusinessUnitReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    undefined: {
      type: "string",
      wsdlDefinition: {
        base: "BusinessUnitReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeFinancialBusinessUnitReferenceType;
Modeler.register(TypeFinancialBusinessUnitReferenceType, "TypeFinancialBusinessUnitReferenceType");
