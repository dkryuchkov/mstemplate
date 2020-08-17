var Modeler = require("../Modeler.js");
var className = 'ElementSupplierPartyTradingLocationProfileReference';

var ElementSupplierPartyTradingLocationProfileReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SupplierPartyTradingLocationProfileReference: {
      type: "TypeSupplierPartyTradingLocationProfileReferenceType",
      wsdlDefinition: {
        name: "SupplierPartyTradingLocationProfileReference",
        type: "SupplierPartyTradingLocationProfileReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a Supplier Party Trading Location Profile in the Supplier Party object"
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
	  SupplierPartyTradingLocationProfileReference: {
      type: "TypeSupplierPartyTradingLocationProfileReferenceType",
      wsdlDefinition: {
        name: "SupplierPartyTradingLocationProfileReference",
        type: "SupplierPartyTradingLocationProfileReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a Supplier Party Trading Location Profile in the Supplier Party object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSupplierPartyTradingLocationProfileReference;
Modeler.register(ElementSupplierPartyTradingLocationProfileReference, "ElementSupplierPartyTradingLocationProfileReference");
