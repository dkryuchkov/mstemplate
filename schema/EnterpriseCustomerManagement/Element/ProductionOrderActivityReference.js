var Modeler = require("../Modeler.js");
var className = 'ElementProductionOrderActivityReference';

var ElementProductionOrderActivityReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProductionOrderActivityReference: {
      type: "TypeProductionOrderActivityReferenceType",
      wsdlDefinition: {
        name: "ProductionOrderActivityReference",
        type: "ProductionOrderActivityReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an activity of an operation within a production order"
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
	  ProductionOrderActivityReference: {
      type: "TypeProductionOrderActivityReferenceType",
      wsdlDefinition: {
        name: "ProductionOrderActivityReference",
        type: "ProductionOrderActivityReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an activity of an operation within a production order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProductionOrderActivityReference;
Modeler.register(ElementProductionOrderActivityReference, "ElementProductionOrderActivityReference");
