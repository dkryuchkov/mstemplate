var Modeler = require("../Modeler.js");
var className = 'ElementSettlementReference';

var ElementSettlementReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SettlementReference: {
      type: "TypeSettlementReferenceType",
      wsdlDefinition: {
        name: "SettlementReference",
        type: "SettlementReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refernce to a settlement"
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
	  SettlementReference: {
      type: "TypeSettlementReferenceType",
      wsdlDefinition: {
        name: "SettlementReference",
        type: "SettlementReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refernce to a settlement"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSettlementReference;
Modeler.register(ElementSettlementReference, "ElementSettlementReference");
