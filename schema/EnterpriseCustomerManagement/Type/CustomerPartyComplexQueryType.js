var Modeler = require("../Modeler.js");
var className = 'TypeCustomerPartyComplexQueryType';

var TypeCustomerPartyComplexQueryType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QueryCode: {
      type: "TypeCustomerPartyQueryCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:QueryCode",
        type: "CustomerPartyQueryCodeType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ResponseCode: {
      type: "TypeCustomerPartyResponseCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ResponseCode",
        type: "CustomerPartyResponseCodeType",
        attribute: false,
        ns: "WL5G3N1"
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
        type: "WL5G3N2:IndicatorType",
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
        type: "WL5G3N2:PositiveIntegerType",
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
        type: "WL5G3N2:PositiveIntegerType",
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
        type: "WL5G3N2:PositiveIntegerType",
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
      type: "TypeCustomerPartyQueryCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:QueryCode",
        type: "CustomerPartyQueryCodeType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ResponseCode: {
      type: "TypeCustomerPartyResponseCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ResponseCode",
        type: "CustomerPartyResponseCodeType",
        attribute: false,
        ns: "WL5G3N1"
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
        type: "WL5G3N2:IndicatorType",
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
        type: "WL5G3N2:PositiveIntegerType",
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
        type: "WL5G3N2:PositiveIntegerType",
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
        type: "WL5G3N2:PositiveIntegerType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomerPartyComplexQueryType;
Modeler.register(TypeCustomerPartyComplexQueryType, "TypeCustomerPartyComplexQueryType");
