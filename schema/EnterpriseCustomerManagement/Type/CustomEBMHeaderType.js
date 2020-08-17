var Modeler = require("../Modeler.js");
var className = 'TypeCustomEBMHeaderType';

var TypeCustomEBMHeaderType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DeviceIntelligence: {
      type: "TypeDeviceIntelligenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:DeviceIntelligence",
        type: "DeviceIntelligenceType",
        attribute: false,
        ns: "corecomcust"
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
	  DeviceIntelligence: {
      type: "TypeDeviceIntelligenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:DeviceIntelligence",
        type: "DeviceIntelligenceType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomEBMHeaderType;
Modeler.register(TypeCustomEBMHeaderType, "TypeCustomEBMHeaderType");
