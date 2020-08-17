var Modeler = require("../Modeler.js");
var className = 'ElementOrganizationPartyReference';

var ElementOrganizationPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OrganizationPartyReference: {
      type: "TypeOrganizationPartyReferenceType",
      wsdlDefinition: {
        name: "OrganizationPartyReference",
        type: "OrganizationPartyReferenceType",
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
	  OrganizationPartyReference: {
      type: "TypeOrganizationPartyReferenceType",
      wsdlDefinition: {
        name: "OrganizationPartyReference",
        type: "OrganizationPartyReferenceType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOrganizationPartyReference;
Modeler.register(ElementOrganizationPartyReference, "ElementOrganizationPartyReference");
