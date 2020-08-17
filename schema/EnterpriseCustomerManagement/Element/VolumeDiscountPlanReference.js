var Modeler = require("../Modeler.js");
var className = 'ElementVolumeDiscountPlanReference';

var ElementVolumeDiscountPlanReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  VolumeDiscountPlanReference: {
      type: "TypeVolumeDiscountPlanReferenceType",
      wsdlDefinition: {
        name: "VolumeDiscountPlanReference",
        type: "VolumeDiscountPlanReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Volume Discount Plan object. A volume discount is an adjustment to the price of a product based on the quantity of that product that is requested in the quote. For Ex: A 5% discount when the user requests five to 10 of the item. A 10% discount when the user requests more than 10 of the item. These rules are defined as part of this Volume Discount Plan object."
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
	  VolumeDiscountPlanReference: {
      type: "TypeVolumeDiscountPlanReferenceType",
      wsdlDefinition: {
        name: "VolumeDiscountPlanReference",
        type: "VolumeDiscountPlanReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Volume Discount Plan object. A volume discount is an adjustment to the price of a product based on the quantity of that product that is requested in the quote. For Ex: A 5% discount when the user requests five to 10 of the item. A 10% discount when the user requests more than 10 of the item. These rules are defined as part of this Volume Discount Plan object."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementVolumeDiscountPlanReference;
Modeler.register(ElementVolumeDiscountPlanReference, "ElementVolumeDiscountPlanReference");
