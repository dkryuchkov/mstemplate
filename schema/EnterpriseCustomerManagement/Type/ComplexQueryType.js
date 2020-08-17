var Modeler = require("../Modeler.js");
var className = 'TypeComplexQueryType';

var TypeComplexQueryType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QueryCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:QueryCode",
        type: "CodeType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ResponseCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ResponseCode",
        type: "CodeType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    QueryCriteria: {
      type: "TypeQueryCriteriaType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:QueryCriteria",
        type: "QueryCriteriaType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ResponseFilter: {
      type: "TypeResponseFilterType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ResponseFilter",
        type: "ResponseFilterType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    getAllTranslationsIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        name: "getAllTranslationsIndicator",
        type: "IndicatorType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    recordSetStart: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        name: "recordSetStart",
        type: "PositiveIntegerType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    recordSetCount: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        name: "recordSetCount",
        type: "PositiveIntegerType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    maxItems: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        name: "maxItems",
        type: "PositiveIntegerType",
        use: "optional",
        attribute: true
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
	  QueryCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:QueryCode",
        type: "CodeType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ResponseCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ResponseCode",
        type: "CodeType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    QueryCriteria: {
      type: "TypeQueryCriteriaType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:QueryCriteria",
        type: "QueryCriteriaType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ResponseFilter: {
      type: "TypeResponseFilterType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ResponseFilter",
        type: "ResponseFilterType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    getAllTranslationsIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        name: "getAllTranslationsIndicator",
        type: "IndicatorType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    recordSetStart: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        name: "recordSetStart",
        type: "PositiveIntegerType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    recordSetCount: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        name: "recordSetCount",
        type: "PositiveIntegerType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    maxItems: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        name: "maxItems",
        type: "PositiveIntegerType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeComplexQueryType;
Modeler.register(TypeComplexQueryType, "TypeComplexQueryType");
