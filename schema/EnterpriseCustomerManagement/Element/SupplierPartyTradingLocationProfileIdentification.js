var Modeler = require("../Modeler.js");
var className = 'ElementSupplierPartyTradingLocationProfileIdentification';

var ElementSupplierPartyTradingLocationProfileIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SupplierPartyTradingLocationProfileIdentification: {
      type: "TypeSupplierPartyTradingLocationProfileIdentificationType",
      wsdlDefinition: {
        name: "SupplierPartyTradingLocationProfileIdentification",
        type: "SupplierPartyTradingLocationProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a SupplierParty Trading Location Profile component in the Supplier Party object"
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
	  SupplierPartyTradingLocationProfileIdentification: {
      type: "TypeSupplierPartyTradingLocationProfileIdentificationType",
      wsdlDefinition: {
        name: "SupplierPartyTradingLocationProfileIdentification",
        type: "SupplierPartyTradingLocationProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a SupplierParty Trading Location Profile component in the Supplier Party object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSupplierPartyTradingLocationProfileIdentification;
Modeler.register(ElementSupplierPartyTradingLocationProfileIdentification, "ElementSupplierPartyTradingLocationProfileIdentification");
