var Modeler = require("../Modeler.js");
var className = 'TypePartyRelatedOrganizationPartyType';

var TypePartyRelatedOrganizationPartyType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OrganizationPartyReference: {
      type: "TypeOrganizationPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OrganizationPartyReference",
        type: "OrganizationPartyReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPartyRelatedOrganizationPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPartyRelatedOrganizationPartyType",
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
	  OrganizationPartyReference: {
      type: "TypeOrganizationPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OrganizationPartyReference",
        type: "OrganizationPartyReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPartyRelatedOrganizationPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPartyRelatedOrganizationPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePartyRelatedOrganizationPartyType;
Modeler.register(TypePartyRelatedOrganizationPartyType, "TypePartyRelatedOrganizationPartyType");
