var Modeler = require("../Modeler.js");
var className = 'ElementDefaultSupplierPartyTradingLocationProfileReference';

var ElementDefaultSupplierPartyTradingLocationProfileReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DefaultSupplierPartyTradingLocationProfileReference: {
      type: "TypeSupplierPartyTradingLocationProfileReferenceType",
      wsdlDefinition: {
        name: "DefaultSupplierPartyTradingLocationProfileReference",
        type: "SupplierPartyTradingLocationProfileReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A default a Supplier Party Trading Location Profile such as in the header for all line levels"
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
	  DefaultSupplierPartyTradingLocationProfileReference: {
      type: "TypeSupplierPartyTradingLocationProfileReferenceType",
      wsdlDefinition: {
        name: "DefaultSupplierPartyTradingLocationProfileReference",
        type: "SupplierPartyTradingLocationProfileReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A default a Supplier Party Trading Location Profile such as in the header for all line levels"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDefaultSupplierPartyTradingLocationProfileReference;
Modeler.register(ElementDefaultSupplierPartyTradingLocationProfileReference, "ElementDefaultSupplierPartyTradingLocationProfileReference");
