var Modeler = require("../Modeler.js");
var className = 'TypeBankruptcyType';

var TypeBankruptcyType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BankruptcyIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BankruptcyIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if open bankruptcy exists"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FilingCount: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FilingCount",
        type: "PositiveIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Number of bankruptcies filed by the parent"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FilingTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FilingTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of bankruptcy filed by the parent"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FilingChapterCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FilingChapterCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Chapter number of the bankruptcy filed by the parent under US Uniform Commercial Code"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FilingDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FilingDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Bankruptcy filing date of the parent"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ConversionCount: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ConversionCount",
        type: "PositiveIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Number of bankruptcy conversions by the parent"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ConversionDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ConversionDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date the bankruptcy converted from one type to another"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ConvertedFilingChapterCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ConvertedFilingChapterCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Change of bankruptcy type"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomParentBankruptcyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomParentBankruptcyType",
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
	  BankruptcyIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BankruptcyIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if open bankruptcy exists"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FilingCount: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FilingCount",
        type: "PositiveIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Number of bankruptcies filed by the parent"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FilingTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FilingTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of bankruptcy filed by the parent"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FilingChapterCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FilingChapterCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Chapter number of the bankruptcy filed by the parent under US Uniform Commercial Code"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FilingDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FilingDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Bankruptcy filing date of the parent"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ConversionCount: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ConversionCount",
        type: "PositiveIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Number of bankruptcy conversions by the parent"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ConversionDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ConversionDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date the bankruptcy converted from one type to another"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ConvertedFilingChapterCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ConvertedFilingChapterCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Change of bankruptcy type"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomParentBankruptcyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomParentBankruptcyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeBankruptcyType;
Modeler.register(TypeBankruptcyType, "TypeBankruptcyType");
