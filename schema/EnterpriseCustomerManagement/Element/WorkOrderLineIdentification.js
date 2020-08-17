var Modeler = require("../Modeler.js");
var className = 'ElementWorkOrderLineIdentification';

var ElementWorkOrderLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WorkOrderLineIdentification: {
      type: "TypeWorkOrderLineIdentificationType",
      wsdlDefinition: {
        name: "WorkOrderLineIdentification",
        type: "WorkOrderLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies a work order line"
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
	  WorkOrderLineIdentification: {
      type: "TypeWorkOrderLineIdentificationType",
      wsdlDefinition: {
        name: "WorkOrderLineIdentification",
        type: "WorkOrderLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies a work order line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWorkOrderLineIdentification;
Modeler.register(ElementWorkOrderLineIdentification, "ElementWorkOrderLineIdentification");
