var Modeler = require("../Modeler.js");
var className = 'ElementExpenderOrganizationUnitReference';

var ElementExpenderOrganizationUnitReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ExpenderOrganizationUnitReference: {
      type: "TypeOrganizationUnitReferenceType",
      wsdlDefinition: {
        name: "ExpenderOrganizationUnitReference",
        type: "OrganizationUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the organization unit where a (project) expenditure item was incurred. This could be a department or other lower level organization unit within an Expender Business Unit"
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
	  ExpenderOrganizationUnitReference: {
      type: "TypeOrganizationUnitReferenceType",
      wsdlDefinition: {
        name: "ExpenderOrganizationUnitReference",
        type: "OrganizationUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the organization unit where a (project) expenditure item was incurred. This could be a department or other lower level organization unit within an Expender Business Unit"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementExpenderOrganizationUnitReference;
Modeler.register(ElementExpenderOrganizationUnitReference, "ElementExpenderOrganizationUnitReference");
