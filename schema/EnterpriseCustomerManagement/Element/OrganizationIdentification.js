var Modeler = require("../Modeler.js");
var className = 'ElementOrganizationIdentification';

var ElementOrganizationIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OrganizationIdentification: {
      type: "TypeOrganizationIdentificationType",
      wsdlDefinition: {
        name: "OrganizationIdentification",
        type: "OrganizationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an Organization"
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
	  OrganizationIdentification: {
      type: "TypeOrganizationIdentificationType",
      wsdlDefinition: {
        name: "OrganizationIdentification",
        type: "OrganizationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an Organization"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOrganizationIdentification;
Modeler.register(ElementOrganizationIdentification, "ElementOrganizationIdentification");
