var Modeler = require("../Modeler.js");
var className = 'ElementInventoryOrganizationReference';

var ElementInventoryOrganizationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InventoryOrganizationReference: {
      type: "TypeInventoryOrganizationReferenceType",
      wsdlDefinition: {
        name: "InventoryOrganizationReference",
        type: "InventoryOrganizationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an Inventory Organization. Refers to an Organization Unit which is classified as Inventory Organizaiton. An Inventory Organizaiton has an inventory functionality. The object associates inventory aspect of the properties to the HR Organization Unit. A manufacturing plant is also typically represented by the Inventory Organization object."
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
	  InventoryOrganizationReference: {
      type: "TypeInventoryOrganizationReferenceType",
      wsdlDefinition: {
        name: "InventoryOrganizationReference",
        type: "InventoryOrganizationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an Inventory Organization. Refers to an Organization Unit which is classified as Inventory Organizaiton. An Inventory Organizaiton has an inventory functionality. The object associates inventory aspect of the properties to the HR Organization Unit. A manufacturing plant is also typically represented by the Inventory Organization object."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementInventoryOrganizationReference;
Modeler.register(ElementInventoryOrganizationReference, "ElementInventoryOrganizationReference");
