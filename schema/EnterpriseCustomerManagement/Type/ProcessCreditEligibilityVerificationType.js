var Modeler = require("../Modeler.js");
var className = 'TypeProcessCreditEligibilityVerificationType';

var TypeProcessCreditEligibilityVerificationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identification of the credit eligibility verification request."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditRequestAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CreditRequestAmount",
        type: "WL5G3N2:AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Amount of credit requested"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RequestDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:RequestDateTime",
        type: "WL5G3N2:DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Time at which the credit eligibility request was made"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SalesOrderReference: {
      type: "TypeSalesOrderReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SalesOrderReference",
        type: "SalesOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "a reference to a SalesOrder."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SalesOpportunityReference: {
      type: "TypeSalesOpportunityReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SalesOpportunityReference",
        type: "SalesOpportunityReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "a reference to a Sales Opportunity."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CustomerPartyReference: {
      type: "TypeCustomerPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CustomerPartyReference",
        type: "CustomerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A reference to a Customer for whom the credit eligibility is being verified"
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
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identification of the credit eligibility verification request."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditRequestAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CreditRequestAmount",
        type: "WL5G3N2:AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Amount of credit requested"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RequestDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:RequestDateTime",
        type: "WL5G3N2:DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Time at which the credit eligibility request was made"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SalesOrderReference: {
      type: "TypeSalesOrderReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SalesOrderReference",
        type: "SalesOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "a reference to a SalesOrder."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SalesOpportunityReference: {
      type: "TypeSalesOpportunityReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SalesOpportunityReference",
        type: "SalesOpportunityReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "a reference to a Sales Opportunity."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CustomerPartyReference: {
      type: "TypeCustomerPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CustomerPartyReference",
        type: "CustomerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A reference to a Customer for whom the credit eligibility is being verified"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeProcessCreditEligibilityVerificationType;
Modeler.register(TypeProcessCreditEligibilityVerificationType, "TypeProcessCreditEligibilityVerificationType");
