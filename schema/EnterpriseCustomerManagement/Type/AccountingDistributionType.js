var Modeler = require("../Modeler.js");
var className = 'TypeAccountingDistributionType';

var TypeAccountingDistributionType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LedgerID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LedgerID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the financial ledger to be used when updating balances"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of the Distribution. Sample values are : Planned, Prepayment and Standard"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AccountClassCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AccountClassCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Describe the Account Class for the distribution. Examples are Revenue, Receivable, Freight, Tax, Unearned Revenue, Unbilled Receivable, Finance Charges etc"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AllocationTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AllocationTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates how the distribution has been allocated. Examples are Amount, Percent"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AccountingDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AccountingDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the date on which the transactions will be accounted in GL"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Percentage: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Percentage",
        type: "PercentType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the percentage of the Line Price applicable to the distribution line. This is used to derive the Amount on the distribution line"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Quantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Quantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the quantity of the associated service or item that is used to calculate the distribution amount"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Amount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Amount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "The amount on this distribution line"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EncumberedQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EncumberedQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Quantity of the distribution that is encumbered"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EncumberedAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EncumberedAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Encumbered amount for distribution"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    UnencumberedAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:UnencumberedAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Amount unencumbered on the distribution"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EncumberedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EncumberedIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the distribution has been encumbered"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AllowEncumberanceIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AllowEncumberanceIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the distribution should be encumbered"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GLEntityID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:GLEntityID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "A G/L entity is the smallest organizational unit for which individual financial statements must be drawn up according to relevant commercial law.\nIt is normally the primary balancing segment of the GL Account structure.  Typically, this is the owning entity for the transaction. \nSynonyms are Business Unit, Fund, G/L Company, Joint Venture, Non-Profit Association Name"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GLAccount: {
      type: "TypeGLAccountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:GLAccount",
        type: "GLAccountType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CostCenterCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CostCenterCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The Cost Center is an accumulator of cost information that may be an organizational unit or area of responsibility.  It is an organization code that allows a grouping of expenses and costs."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ProfitCenterCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ProfitCenterCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The Profit Center is an accumulator of revenue information that may be an organizational unit or area of responsibility.  A profit center can be used for internal management control.  Profit centers can calculate operating profit using the cost-of-sales accounting and/or period accounting methods"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ProjectReference: {
      type: "TypeProjectReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ProjectReference",
        type: "ProjectReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ContractLineReference: {
      type: "TypeContractLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ContractLineReference",
        type: "ContractLineReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WIPEntityReference: {
      type: "TypeWIPEntityReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WIPEntityReference",
        type: "WIPEntityReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WIPEntityLineReference: {
      type: "TypeWIPEntityLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WIPEntityLineReference",
        type: "WIPEntityLineReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WIPOperationReference: {
      type: "TypeWIPOperationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WIPOperationReference",
        type: "WIPOperationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WIPOperationResourceReference: {
      type: "TypeWIPOperationResourceReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WIPOperationResourceReference",
        type: "WIPOperationResourceReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BusinessUnitReference: {
      type: "TypeBusinessUnitReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BusinessUnitReference",
        type: "BusinessUnitReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RequisitionDistributionReference: {
      type: "TypeRequisitionDistributionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RequisitionDistributionReference",
        type: "RequisitionDistributionReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CurrencyExchange: {
      type: "TypeCurrencyExchangeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CurrencyExchange",
        type: "CurrencyExchangeType",
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
	  LedgerID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LedgerID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the financial ledger to be used when updating balances"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of the Distribution. Sample values are : Planned, Prepayment and Standard"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AccountClassCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AccountClassCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Describe the Account Class for the distribution. Examples are Revenue, Receivable, Freight, Tax, Unearned Revenue, Unbilled Receivable, Finance Charges etc"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AllocationTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AllocationTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates how the distribution has been allocated. Examples are Amount, Percent"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AccountingDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AccountingDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the date on which the transactions will be accounted in GL"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Percentage: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Percentage",
        type: "PercentType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the percentage of the Line Price applicable to the distribution line. This is used to derive the Amount on the distribution line"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Quantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Quantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the quantity of the associated service or item that is used to calculate the distribution amount"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Amount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Amount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "The amount on this distribution line"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EncumberedQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EncumberedQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Quantity of the distribution that is encumbered"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EncumberedAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EncumberedAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Encumbered amount for distribution"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    UnencumberedAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:UnencumberedAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Amount unencumbered on the distribution"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EncumberedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EncumberedIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the distribution has been encumbered"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AllowEncumberanceIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AllowEncumberanceIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the distribution should be encumbered"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GLEntityID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:GLEntityID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "A G/L entity is the smallest organizational unit for which individual financial statements must be drawn up according to relevant commercial law.\nIt is normally the primary balancing segment of the GL Account structure.  Typically, this is the owning entity for the transaction. \nSynonyms are Business Unit, Fund, G/L Company, Joint Venture, Non-Profit Association Name"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GLAccount: {
      type: "TypeGLAccountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:GLAccount",
        type: "GLAccountType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CostCenterCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CostCenterCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The Cost Center is an accumulator of cost information that may be an organizational unit or area of responsibility.  It is an organization code that allows a grouping of expenses and costs."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ProfitCenterCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ProfitCenterCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The Profit Center is an accumulator of revenue information that may be an organizational unit or area of responsibility.  A profit center can be used for internal management control.  Profit centers can calculate operating profit using the cost-of-sales accounting and/or period accounting methods"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ProjectReference: {
      type: "TypeProjectReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ProjectReference",
        type: "ProjectReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ContractLineReference: {
      type: "TypeContractLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ContractLineReference",
        type: "ContractLineReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WIPEntityReference: {
      type: "TypeWIPEntityReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WIPEntityReference",
        type: "WIPEntityReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WIPEntityLineReference: {
      type: "TypeWIPEntityLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WIPEntityLineReference",
        type: "WIPEntityLineReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WIPOperationReference: {
      type: "TypeWIPOperationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WIPOperationReference",
        type: "WIPOperationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WIPOperationResourceReference: {
      type: "TypeWIPOperationResourceReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WIPOperationResourceReference",
        type: "WIPOperationResourceReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BusinessUnitReference: {
      type: "TypeBusinessUnitReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BusinessUnitReference",
        type: "BusinessUnitReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RequisitionDistributionReference: {
      type: "TypeRequisitionDistributionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RequisitionDistributionReference",
        type: "RequisitionDistributionReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CurrencyExchange: {
      type: "TypeCurrencyExchangeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CurrencyExchange",
        type: "CurrencyExchangeType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAccountingDistributionType;
Modeler.register(TypeAccountingDistributionType, "TypeAccountingDistributionType");
