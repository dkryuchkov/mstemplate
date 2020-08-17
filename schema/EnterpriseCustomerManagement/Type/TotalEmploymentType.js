var Modeler = require("../Modeler.js");
var className = 'TypeTotalEmploymentType';

var TypeTotalEmploymentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EmployeeCount: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EmployeeCount",
        type: "PositiveIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Total number of personnel employeed"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SubsidiaryCountIncludedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SubsidiaryCountIncludedIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether subsidiaries are included in the calculation of total employees"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EstimatedCountIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EstimatedCountIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the employee total is estimated"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EmploymentCountCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EmploymentCountCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the number is a minimum, maximum, or average number of total employees"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomTotalEmploymentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomTotalEmploymentType",
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
	  EmployeeCount: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EmployeeCount",
        type: "PositiveIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Total number of personnel employeed"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SubsidiaryCountIncludedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SubsidiaryCountIncludedIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether subsidiaries are included in the calculation of total employees"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EstimatedCountIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EstimatedCountIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the employee total is estimated"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EmploymentCountCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EmploymentCountCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the number is a minimum, maximum, or average number of total employees"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomTotalEmploymentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomTotalEmploymentType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeTotalEmploymentType;
Modeler.register(TypeTotalEmploymentType, "TypeTotalEmploymentType");
