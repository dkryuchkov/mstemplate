var Modeler = require("../Modeler.js");
var className = 'ElementVolumeDiscountPlanIdentification';

var ElementVolumeDiscountPlanIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  VolumeDiscountPlanIdentification: {
      type: "TypeVolumeDiscountPlanIdentificationType",
      wsdlDefinition: {
        name: "VolumeDiscountPlanIdentification",
        type: "VolumeDiscountPlanIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Volume Discount Plan object"
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
	  VolumeDiscountPlanIdentification: {
      type: "TypeVolumeDiscountPlanIdentificationType",
      wsdlDefinition: {
        name: "VolumeDiscountPlanIdentification",
        type: "VolumeDiscountPlanIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Volume Discount Plan object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementVolumeDiscountPlanIdentification;
Modeler.register(ElementVolumeDiscountPlanIdentification, "ElementVolumeDiscountPlanIdentification");
