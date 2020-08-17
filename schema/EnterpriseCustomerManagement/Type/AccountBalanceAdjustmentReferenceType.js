var Modeler = require("../Modeler.js");
var className = 'TypeAccountBalanceAdjustmentReferenceType';

var TypeAccountBalanceAdjustmentReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AccountBalanceAdjustmentIdentification: {
      type: "TypeAccountBalanceAdjustmentIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AccountBalanceAdjustmentIdentification",
        type: "AccountBalanceAdjustmentIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomAccountBalanceAdjustmentReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomAccountBalanceAdjustmentReferenceType",
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
	  AccountBalanceAdjustmentIdentification: {
      type: "TypeAccountBalanceAdjustmentIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AccountBalanceAdjustmentIdentification",
        type: "AccountBalanceAdjustmentIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomAccountBalanceAdjustmentReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomAccountBalanceAdjustmentReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAccountBalanceAdjustmentReferenceType;
Modeler.register(TypeAccountBalanceAdjustmentReferenceType, "TypeAccountBalanceAdjustmentReferenceType");
