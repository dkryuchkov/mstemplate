var Modeler = require("../Modeler.js");
var className = 'ElementOrganizationUnitReference';

var ElementOrganizationUnitReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OrganizationUnitReference: {
      type: "TypeOrganizationUnitReferenceType",
      wsdlDefinition: {
        name: "OrganizationUnitReference",
        type: "OrganizationUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Organization Unit is a logical group of people working together. It has a classification that detrmines its type such as Department, legal employer, Business Unit."
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
	  OrganizationUnitReference: {
      type: "TypeOrganizationUnitReferenceType",
      wsdlDefinition: {
        name: "OrganizationUnitReference",
        type: "OrganizationUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Organization Unit is a logical group of people working together. It has a classification that detrmines its type such as Department, legal employer, Business Unit."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOrganizationUnitReference;
Modeler.register(ElementOrganizationUnitReference, "ElementOrganizationUnitReference");
