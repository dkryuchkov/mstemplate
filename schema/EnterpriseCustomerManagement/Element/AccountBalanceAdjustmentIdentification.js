var Modeler = require("../Modeler.js");
var className = 'ElementAccountBalanceAdjustmentIdentification';

var ElementAccountBalanceAdjustmentIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AccountBalanceAdjustmentIdentification: {
      type: "TypeAccountBalanceAdjustmentIdentificationType",
      wsdlDefinition: {
        name: "AccountBalanceAdjustmentIdentification",
        type: "AccountBalanceAdjustmentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Account Balance Adjustment"
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
	  AccountBalanceAdjustmentIdentification: {
      type: "TypeAccountBalanceAdjustmentIdentificationType",
      wsdlDefinition: {
        name: "AccountBalanceAdjustmentIdentification",
        type: "AccountBalanceAdjustmentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Account Balance Adjustment"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAccountBalanceAdjustmentIdentification;
Modeler.register(ElementAccountBalanceAdjustmentIdentification, "ElementAccountBalanceAdjustmentIdentification");
