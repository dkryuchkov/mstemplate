var Modeler = require("../Modeler.js");
var className = 'ElementOrganization';

var ElementOrganization = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Organization: {
      type: "TypeOrganizationType",
      wsdlDefinition: {
        name: "Organization",
        type: "OrganizationType",
        "xsd:annotation": {
          "xsd:documentation": "An organization entity"
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
	  Organization: {
      type: "TypeOrganizationType",
      wsdlDefinition: {
        name: "Organization",
        type: "OrganizationType",
        "xsd:annotation": {
          "xsd:documentation": "An organization entity"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOrganization;
Modeler.register(ElementOrganization, "ElementOrganization");
