var Modeler = require("../Modeler.js");
var className = 'ElementDriverPartyReference';

var ElementDriverPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DriverPartyReference: {
      type: "TypeDriverPartyReferenceType",
      wsdlDefinition: {
        name: "DriverPartyReference",
        type: "DriverPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A Person who provides an essential service to industrialized societies by transporting finished goods and raw materials over land, typically from manufacturing plants to retail or distribution centers. Drivers are also responsible for the inspection and maintenance of the vehicle used"
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
	  DriverPartyReference: {
      type: "TypeDriverPartyReferenceType",
      wsdlDefinition: {
        name: "DriverPartyReference",
        type: "DriverPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A Person who provides an essential service to industrialized societies by transporting finished goods and raw materials over land, typically from manufacturing plants to retail or distribution centers. Drivers are also responsible for the inspection and maintenance of the vehicle used"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDriverPartyReference;
Modeler.register(ElementDriverPartyReference, "ElementDriverPartyReference");
