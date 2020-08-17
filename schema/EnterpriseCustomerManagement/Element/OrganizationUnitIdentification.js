var Modeler = require("../Modeler.js");
var className = 'ElementOrganizationUnitIdentification';

var ElementOrganizationUnitIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OrganizationUnitIdentification: {
      type: "TypeOrganizationUnitIdentificationType",
      wsdlDefinition: {
        name: "OrganizationUnitIdentification",
        type: "OrganizationUnitIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Organization Unit"
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
	  OrganizationUnitIdentification: {
      type: "TypeOrganizationUnitIdentificationType",
      wsdlDefinition: {
        name: "OrganizationUnitIdentification",
        type: "OrganizationUnitIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Organization Unit"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOrganizationUnitIdentification;
Modeler.register(ElementOrganizationUnitIdentification, "ElementOrganizationUnitIdentification");
