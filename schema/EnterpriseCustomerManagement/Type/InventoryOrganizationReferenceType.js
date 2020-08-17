var Modeler = require("../Modeler.js");
var className = 'TypeInventoryOrganizationReferenceType';

var TypeInventoryOrganizationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InventoryOrganizationIdentification: {
      type: "TypeInventoryOrganizationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InventoryOrganizationIdentification",
        type: "InventoryOrganizationIdentificationType",
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
          "xsd:documentation": "Unique identification of an Organization Unit. An InventoryOrganization is an OrganizationUnit with Inventory functional specific properties. The relation between an InventoryOrganization and the OrganizationUnit is 1 to 1. This identification can be veiwed as an alternate identification of the InventoryOrganization. It is important to have this identification when an OrganizationUnit can have multiple behaviors/classifications, e.g., being both an InventoryOrganization, a BusinessUnit, etc."
        },
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
	  InventoryOrganizationIdentification: {
      type: "TypeInventoryOrganizationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InventoryOrganizationIdentification",
        type: "InventoryOrganizationIdentificationType",
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
          "xsd:documentation": "Unique identification of an Organization Unit. An InventoryOrganization is an OrganizationUnit with Inventory functional specific properties. The relation between an InventoryOrganization and the OrganizationUnit is 1 to 1. This identification can be veiwed as an alternate identification of the InventoryOrganization. It is important to have this identification when an OrganizationUnit can have multiple behaviors/classifications, e.g., being both an InventoryOrganization, a BusinessUnit, etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInventoryOrganizationReferenceType;
Modeler.register(TypeInventoryOrganizationReferenceType, "TypeInventoryOrganizationReferenceType");
