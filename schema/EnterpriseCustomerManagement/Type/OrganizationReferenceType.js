var Modeler = require("../Modeler.js");
var className = 'TypeOrganizationReferenceType';

var TypeOrganizationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OrganizationIdentification: {
      type: "TypeOrganizationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OrganizationIdentification",
        type: "OrganizationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomOrganizationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomOrganizationReferenceType",
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
	  OrganizationIdentification: {
      type: "TypeOrganizationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OrganizationIdentification",
        type: "OrganizationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomOrganizationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomOrganizationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeOrganizationReferenceType;
Modeler.register(TypeOrganizationReferenceType, "TypeOrganizationReferenceType");
