var Modeler = require("../Modeler.js");
var className = 'TypeTaxType';

var TypeTaxType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Code: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Code",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Tax Code"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxJurisdictionCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaxJurisdictionCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Code used to identify the taxing authority that is applicable for a specific location"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxAuthorityAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaxAuthorityAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Represents the tax amount in the currency of the taxing authority in addition to the transactional tax amount which may be in a different currency"
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
          "xsd:documentation": "Tax Amount in the transactional currency"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeclarationDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DeclarationDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "DateTime at which the tax value was computed"
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
          "xsd:documentation": "Identify the type of Tax. An example is type State, with ID as MA"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxExemption: {
      type: "TypeTaxExemptionType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaxExemption",
        type: "TaxExemptionType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Description",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Description of the tax"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Note: {
      type: "TypeNoteType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Note",
        type: "NoteType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    TaxRate: {
      type: "TypeRateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaxRate",
        type: "RateType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BasisAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BasisAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "The amount on which the tax is calculated. This may be different from the line amount"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BasisQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BasisQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "The quantity used for calculating the tax. This may be different from the line quantity"
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
	  Code: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Code",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Tax Code"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxJurisdictionCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaxJurisdictionCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Code used to identify the taxing authority that is applicable for a specific location"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxAuthorityAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaxAuthorityAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Represents the tax amount in the currency of the taxing authority in addition to the transactional tax amount which may be in a different currency"
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
          "xsd:documentation": "Tax Amount in the transactional currency"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeclarationDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DeclarationDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "DateTime at which the tax value was computed"
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
          "xsd:documentation": "Identify the type of Tax. An example is type State, with ID as MA"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxExemption: {
      type: "TypeTaxExemptionType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaxExemption",
        type: "TaxExemptionType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Description",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Description of the tax"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Note: {
      type: "TypeNoteType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Note",
        type: "NoteType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    TaxRate: {
      type: "TypeRateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaxRate",
        type: "RateType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BasisAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BasisAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "The amount on which the tax is calculated. This may be different from the line amount"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BasisQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BasisQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "The quantity used for calculating the tax. This may be different from the line quantity"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeTaxType;
Modeler.register(TypeTaxType, "TypeTaxType");
