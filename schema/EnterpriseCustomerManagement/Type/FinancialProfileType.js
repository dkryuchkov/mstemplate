var Modeler = require("../Modeler.js");
var className = 'TypeFinancialProfileType';

var TypeFinancialProfileType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BalanceAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BalanceAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "The reported balance on an account. The balance can be a positive number, negative number, or zero"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BalanceVerificationDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BalanceVerificationDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Last date on which the account balance was verified"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinancialAccount: {
      type: "TypeFinancialAccountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialAccount",
        type: "FinancialAccountType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Status: {
      type: "TypeStatusType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Status",
        type: "StatusType",
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
	  BalanceAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BalanceAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "The reported balance on an account. The balance can be a positive number, negative number, or zero"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BalanceVerificationDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BalanceVerificationDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Last date on which the account balance was verified"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinancialAccount: {
      type: "TypeFinancialAccountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialAccount",
        type: "FinancialAccountType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Status: {
      type: "TypeStatusType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Status",
        type: "StatusType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeFinancialProfileType;
Modeler.register(TypeFinancialProfileType, "TypeFinancialProfileType");
