var Modeler = require("../Modeler.js");
var className = 'ElementInventoryOrganizationIdentification';

var ElementInventoryOrganizationIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InventoryOrganizationIdentification: {
      type: "TypeInventoryOrganizationIdentificationType",
      wsdlDefinition: {
        name: "InventoryOrganizationIdentification",
        type: "InventoryOrganizationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Inventory Organization object"
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
	  InventoryOrganizationIdentification: {
      type: "TypeInventoryOrganizationIdentificationType",
      wsdlDefinition: {
        name: "InventoryOrganizationIdentification",
        type: "InventoryOrganizationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Inventory Organization object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementInventoryOrganizationIdentification;
Modeler.register(ElementInventoryOrganizationIdentification, "ElementInventoryOrganizationIdentification");
