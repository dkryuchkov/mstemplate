var Modeler = require("../Modeler.js");
var className = 'TypeSalesQuotaType';

var TypeSalesQuotaType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Name: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Name",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of objective, measure or quota. Used to identify where retired quota should be applied. In sales this is commonly referred to as a Quota. Outside of sales this may be seen more as an objective or measure for a customer service rep to answer an average of 10 \ncalls per hour for the week."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    TargetQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TargetQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Quota target quantity in number of units sold, currency, or points."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AccountingPeriodReference: {
      type: "TypeAccountingPeriodReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AccountingPeriodReference",
        type: "AccountingPeriodReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Name of interval associated to a quota. For instance, FY2009 quota or Q4FY09 quota."
        },
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
	  Name: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Name",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of objective, measure or quota. Used to identify where retired quota should be applied. In sales this is commonly referred to as a Quota. Outside of sales this may be seen more as an objective or measure for a customer service rep to answer an average of 10 \ncalls per hour for the week."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    TargetQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TargetQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Quota target quantity in number of units sold, currency, or points."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AccountingPeriodReference: {
      type: "TypeAccountingPeriodReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AccountingPeriodReference",
        type: "AccountingPeriodReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Name of interval associated to a quota. For instance, FY2009 quota or Q4FY09 quota."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSalesQuotaType;
Modeler.register(TypeSalesQuotaType, "TypeSalesQuotaType");
