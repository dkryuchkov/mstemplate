var Modeler = require("../Modeler.js");
var className = 'TypeManufacturingRoutingReferenceType';

var TypeManufacturingRoutingReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ManufacturingRoutingIdentification: {
      type: "TypeManufacturingRoutingIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ManufacturingRoutingIdentification",
        type: "ManufacturingRoutingIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomManufacturingRoutingReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomManufacturingRoutingReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
	  ManufacturingRoutingIdentification: {
      type: "TypeManufacturingRoutingIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ManufacturingRoutingIdentification",
        type: "ManufacturingRoutingIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomManufacturingRoutingReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomManufacturingRoutingReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeManufacturingRoutingReferenceType;
Modeler.register(TypeManufacturingRoutingReferenceType, "TypeManufacturingRoutingReferenceType");
