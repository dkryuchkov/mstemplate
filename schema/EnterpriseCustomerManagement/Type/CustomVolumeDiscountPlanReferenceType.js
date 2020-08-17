var Modeler = require("../Modeler.js");
var className = 'TypeCustomVolumeDiscountPlanReferenceType';

var TypeCustomVolumeDiscountPlanReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomVolumeDiscountPlanReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomVolumeDiscountPlanReferenceType",
        attribute: false,
        type: "xsd:string"
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
	  CustomVolumeDiscountPlanReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomVolumeDiscountPlanReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomVolumeDiscountPlanReferenceType;
Modeler.register(TypeCustomVolumeDiscountPlanReferenceType, "TypeCustomVolumeDiscountPlanReferenceType");
