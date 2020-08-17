var Modeler = require("../Modeler.js");
var className = 'ElementProductionOrderResourceReference';

var ElementProductionOrderResourceReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProductionOrderResourceReference: {
      type: "TypeProductionOrderResourceReferenceType",
      wsdlDefinition: {
        name: "ProductionOrderResourceReference",
        type: "ProductionOrderResourceReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a resource within a batch production order operation activity"
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
	  ProductionOrderResourceReference: {
      type: "TypeProductionOrderResourceReferenceType",
      wsdlDefinition: {
        name: "ProductionOrderResourceReference",
        type: "ProductionOrderResourceReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a resource within a batch production order operation activity"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProductionOrderResourceReference;
Modeler.register(ElementProductionOrderResourceReference, "ElementProductionOrderResourceReference");
