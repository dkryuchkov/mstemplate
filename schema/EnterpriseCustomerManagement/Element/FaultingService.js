var Modeler = require("../Modeler.js");
var className = 'ElementFaultingService';

var ElementFaultingService = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FaultingService: {
      type: "TypeFaultingServiceType",
      wsdlDefinition: {
        name: "FaultingService",
        type: "FaultingServiceType",
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
	  FaultingService: {
      type: "TypeFaultingServiceType",
      wsdlDefinition: {
        name: "FaultingService",
        type: "FaultingServiceType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFaultingService;
Modeler.register(ElementFaultingService, "ElementFaultingService");
