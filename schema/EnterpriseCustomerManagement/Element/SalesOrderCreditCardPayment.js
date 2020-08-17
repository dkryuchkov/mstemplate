var Modeler = require("../Modeler.js");
var className = 'ElementSalesOrderCreditCardPayment';

var ElementSalesOrderCreditCardPayment = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesOrderCreditCardPayment: {
      type: "TypeCreditCardPaymentType",
      wsdlDefinition: {
        name: "SalesOrderCreditCardPayment",
        type: "CreditCardPaymentType",
        "xsd:annotation": {
          "xsd:documentation": "Credit Card and Authorization Details for Sales Order payment"
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
	  SalesOrderCreditCardPayment: {
      type: "TypeCreditCardPaymentType",
      wsdlDefinition: {
        name: "SalesOrderCreditCardPayment",
        type: "CreditCardPaymentType",
        "xsd:annotation": {
          "xsd:documentation": "Credit Card and Authorization Details for Sales Order payment"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalesOrderCreditCardPayment;
Modeler.register(ElementSalesOrderCreditCardPayment, "ElementSalesOrderCreditCardPayment");
