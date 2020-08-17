var Modeler = require("../Modeler.js");
var className = 'TypePrimaryAddressEmploymentDetailType';

var TypePrimaryAddressEmploymentDetailType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EmployeeCount: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EmployeeCount",
        type: "PositiveIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Number of employees at the referenced address"
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
          "xsd:documentation": "Qualifies calculation of employees at the primary address as estimated"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MinimumCountIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MinimumCountIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Qualifies calculation of employees at the primary address as minimum"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPrimaryAddressEmploymentDetailType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPrimaryAddressEmploymentDetailType",
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
          "xsd:documentation": "Number of employees at the referenced address"
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
          "xsd:documentation": "Qualifies calculation of employees at the primary address as estimated"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MinimumCountIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MinimumCountIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Qualifies calculation of employees at the primary address as minimum"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPrimaryAddressEmploymentDetailType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPrimaryAddressEmploymentDetailType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePrimaryAddressEmploymentDetailType;
Modeler.register(TypePrimaryAddressEmploymentDetailType, "TypePrimaryAddressEmploymentDetailType");
