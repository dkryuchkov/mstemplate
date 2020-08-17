var Modeler = require("../Modeler.js");
var className = 'ElementManufacturerPartyReference';

var ElementManufacturerPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ManufacturerPartyReference: {
      type: "TypeManufacturerPartyReferenceType",
      wsdlDefinition: {
        name: "ManufacturerPartyReference",
        type: "ManufacturerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Person or Organization involved in the manufacture of some product"
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
	  ManufacturerPartyReference: {
      type: "TypeManufacturerPartyReferenceType",
      wsdlDefinition: {
        name: "ManufacturerPartyReference",
        type: "ManufacturerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Person or Organization involved in the manufacture of some product"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementManufacturerPartyReference;
Modeler.register(ElementManufacturerPartyReference, "ElementManufacturerPartyReference");
