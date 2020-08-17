var Modeler = require("../Modeler.js");
var className = 'ElementCarrierPartyReference';

var ElementCarrierPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CarrierPartyReference: {
      type: "TypeCarrierPartyReferenceType",
      wsdlDefinition: {
        name: "CarrierPartyReference",
        type: "CarrierPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Freight carrier responsible for the transportation of goods from the supplier to the customer"
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
	  CarrierPartyReference: {
      type: "TypeCarrierPartyReferenceType",
      wsdlDefinition: {
        name: "CarrierPartyReference",
        type: "CarrierPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Freight carrier responsible for the transportation of goods from the supplier to the customer"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCarrierPartyReference;
Modeler.register(ElementCarrierPartyReference, "ElementCarrierPartyReference");
