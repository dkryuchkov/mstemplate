var Modeler = require("../Modeler.js");
var className = 'ElementTransportationSalesOrderCreditCardPayment';

var ElementTransportationSalesOrderCreditCardPayment = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TransportationSalesOrderCreditCardPayment: {
      type: "TypeCreditCardPaymentType",
      wsdlDefinition: {
        name: "TransportationSalesOrderCreditCardPayment",
        type: "CreditCardPaymentType",
        "xsd:annotation": {
          "xsd:documentation": "Credit Card and Authorization Details for Transportation Sales Order payment"
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
	  TransportationSalesOrderCreditCardPayment: {
      type: "TypeCreditCardPaymentType",
      wsdlDefinition: {
        name: "TransportationSalesOrderCreditCardPayment",
        type: "CreditCardPaymentType",
        "xsd:annotation": {
          "xsd:documentation": "Credit Card and Authorization Details for Transportation Sales Order payment"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTransportationSalesOrderCreditCardPayment;
Modeler.register(ElementTransportationSalesOrderCreditCardPayment, "ElementTransportationSalesOrderCreditCardPayment");
