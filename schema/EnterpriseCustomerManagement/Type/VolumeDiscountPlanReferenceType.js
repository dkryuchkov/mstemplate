var Modeler = require("../Modeler.js");
var className = 'TypeVolumeDiscountPlanReferenceType';

var TypeVolumeDiscountPlanReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  VolumeDiscountPlanIdentification: {
      type: "TypeVolumeDiscountPlanIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:VolumeDiscountPlanIdentification",
        type: "VolumeDiscountPlanIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomVolumeDiscountPlanReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomVolumeDiscountPlanReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:VolumeDiscountPlanIdentification",
        type: "VolumeDiscountPlanIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomVolumeDiscountPlanReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomVolumeDiscountPlanReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVolumeDiscountPlanReferenceType;
Modeler.register(TypeVolumeDiscountPlanReferenceType, "TypeVolumeDiscountPlanReferenceType");
