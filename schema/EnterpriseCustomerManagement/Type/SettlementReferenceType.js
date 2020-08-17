var Modeler = require("../Modeler.js");
var className = 'TypeSettlementReferenceType';

var TypeSettlementReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SettlementIdentification: {
      type: "TypeSettlementIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SettlementIdentification",
        type: "SettlementIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomSettlementReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomSettlementReferenceType",
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
	  SettlementIdentification: {
      type: "TypeSettlementIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SettlementIdentification",
        type: "SettlementIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomSettlementReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomSettlementReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSettlementReferenceType;
Modeler.register(TypeSettlementReferenceType, "TypeSettlementReferenceType");
