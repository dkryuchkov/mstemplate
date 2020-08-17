var Modeler = require("../Modeler.js");
var className = 'TypeCustomEBMTrackingType';

var TypeCustomEBMTrackingType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomEBMTrackingType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEBMTrackingType",
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
	  CustomEBMTrackingType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEBMTrackingType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomEBMTrackingType;
Modeler.register(TypeCustomEBMTrackingType, "TypeCustomEBMTrackingType");
