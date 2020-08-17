var Modeler = require("../Modeler.js");
var className = 'ElementEBMTracking';

var ElementEBMTracking = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EBMTracking: {
      type: "TypeEBMTrackingType",
      wsdlDefinition: {
        name: "EBMTracking",
        type: "EBMTrackingType",
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
	  EBMTracking: {
      type: "TypeEBMTrackingType",
      wsdlDefinition: {
        name: "EBMTracking",
        type: "EBMTrackingType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEBMTracking;
Modeler.register(ElementEBMTracking, "ElementEBMTracking");
