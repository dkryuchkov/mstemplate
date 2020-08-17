var Modeler = require("../Modeler.js");
var className = 'ElementWorkOrderIdentification';

var ElementWorkOrderIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WorkOrderIdentification: {
      type: "TypeWorkOrderIdentificationType",
      wsdlDefinition: {
        name: "WorkOrderIdentification",
        type: "WorkOrderIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies a work order"
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
	  WorkOrderIdentification: {
      type: "TypeWorkOrderIdentificationType",
      wsdlDefinition: {
        name: "WorkOrderIdentification",
        type: "WorkOrderIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies a work order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWorkOrderIdentification;
Modeler.register(ElementWorkOrderIdentification, "ElementWorkOrderIdentification");
