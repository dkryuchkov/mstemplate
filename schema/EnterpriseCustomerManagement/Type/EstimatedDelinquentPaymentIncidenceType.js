var Modeler = require("../Modeler.js");
var className = 'TypeEstimatedDelinquentPaymentIncidenceType';

var TypeEstimatedDelinquentPaymentIncidenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RangePercent: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RangePercent",
        type: "PercentType",
        "xsd:annotation": {
          "xsd:documentation": "Specifies a delinquency percentage for a Credit Score range"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AllFirmsPercent: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AllFirmsPercent",
        type: "PercentType",
        "xsd:annotation": {
          "xsd:documentation": "Specifies a delinquency percentage for all firms"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LowRangeScore: {
      type: "TypeIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LowRangeScore",
        type: "IntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Specifies the low end of the range of the Commercial Credit Score"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    HighRangeScore: {
      type: "TypeIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:HighRangeScore",
        type: "IntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Specifies the high end of the range of the Commercial Credit Score"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomEstimatedDelinquentPaymentIncidenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomEstimatedDelinquentPaymentIncidenceType",
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
	  RangePercent: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RangePercent",
        type: "PercentType",
        "xsd:annotation": {
          "xsd:documentation": "Specifies a delinquency percentage for a Credit Score range"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AllFirmsPercent: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AllFirmsPercent",
        type: "PercentType",
        "xsd:annotation": {
          "xsd:documentation": "Specifies a delinquency percentage for all firms"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LowRangeScore: {
      type: "TypeIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LowRangeScore",
        type: "IntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Specifies the low end of the range of the Commercial Credit Score"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    HighRangeScore: {
      type: "TypeIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:HighRangeScore",
        type: "IntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Specifies the high end of the range of the Commercial Credit Score"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomEstimatedDelinquentPaymentIncidenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomEstimatedDelinquentPaymentIncidenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeEstimatedDelinquentPaymentIncidenceType;
Modeler.register(TypeEstimatedDelinquentPaymentIncidenceType, "TypeEstimatedDelinquentPaymentIncidenceType");
