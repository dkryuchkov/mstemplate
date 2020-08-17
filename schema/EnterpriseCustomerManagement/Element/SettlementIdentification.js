var Modeler = require("../Modeler.js");
var className = 'ElementSettlementIdentification';

var ElementSettlementIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SettlementIdentification: {
      type: "TypeSettlementIdentificationType",
      wsdlDefinition: {
        name: "SettlementIdentification",
        type: "SettlementIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Settlement"
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
	  SettlementIdentification: {
      type: "TypeSettlementIdentificationType",
      wsdlDefinition: {
        name: "SettlementIdentification",
        type: "SettlementIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Settlement"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSettlementIdentification;
Modeler.register(ElementSettlementIdentification, "ElementSettlementIdentification");
