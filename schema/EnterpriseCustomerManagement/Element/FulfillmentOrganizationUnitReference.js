var Modeler = require("../Modeler.js");
var className = 'ElementFulfillmentOrganizationUnitReference';

var ElementFulfillmentOrganizationUnitReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FulfillmentOrganizationUnitReference: {
      type: "TypeOrganizationUnitReferenceType",
      wsdlDefinition: {
        name: "FulfillmentOrganizationUnitReference",
        type: "OrganizationUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to an Organization Unit which fulfills a particular goods or service ordered by a customer. The referred to Organization Unit may be a physical inventory location, service organization, or and inventory organization."
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
	  FulfillmentOrganizationUnitReference: {
      type: "TypeOrganizationUnitReferenceType",
      wsdlDefinition: {
        name: "FulfillmentOrganizationUnitReference",
        type: "OrganizationUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to an Organization Unit which fulfills a particular goods or service ordered by a customer. The referred to Organization Unit may be a physical inventory location, service organization, or and inventory organization."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFulfillmentOrganizationUnitReference;
Modeler.register(ElementFulfillmentOrganizationUnitReference, "ElementFulfillmentOrganizationUnitReference");
