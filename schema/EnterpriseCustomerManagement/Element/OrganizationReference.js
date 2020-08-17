var Modeler = require("../Modeler.js");
var className = 'ElementOrganizationReference';

var ElementOrganizationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OrganizationReference: {
      type: "TypeOrganizationReferenceType",
      wsdlDefinition: {
        name: "OrganizationReference",
        type: "OrganizationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Organization is a business, company or institution outside of the deploying company. Organization is used in the sense where business relationship between the deploying company and the referenced organization is not of concerned (unlike the OrganizationParty)."
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
	  OrganizationReference: {
      type: "TypeOrganizationReferenceType",
      wsdlDefinition: {
        name: "OrganizationReference",
        type: "OrganizationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Organization is a business, company or institution outside of the deploying company. Organization is used in the sense where business relationship between the deploying company and the referenced organization is not of concerned (unlike the OrganizationParty)."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOrganizationReference;
Modeler.register(ElementOrganizationReference, "ElementOrganizationReference");
