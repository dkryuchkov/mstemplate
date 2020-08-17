var Modeler = require("../Modeler.js");
var className = 'TypeOrganizationUnitReferenceType';

var TypeOrganizationUnitReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OrganizationUnitIdentification: {
      type: "TypeOrganizationUnitIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OrganizationUnitIdentification",
        type: "OrganizationUnitIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomOrganizationUnitReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomOrganizationUnitReferenceType",
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
	  OrganizationUnitIdentification: {
      type: "TypeOrganizationUnitIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OrganizationUnitIdentification",
        type: "OrganizationUnitIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomOrganizationUnitReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomOrganizationUnitReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeOrganizationUnitReferenceType;
Modeler.register(TypeOrganizationUnitReferenceType, "TypeOrganizationUnitReferenceType");
