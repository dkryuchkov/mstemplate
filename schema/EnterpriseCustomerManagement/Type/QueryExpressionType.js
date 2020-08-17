var Modeler = require("../Modeler.js");
var className = 'TypeQueryExpressionType';

var TypeQueryExpressionType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ValueExpression: {
      type: "TypeValueExpressionType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ValueExpression",
        type: "ValueExpressionType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    QueryExpression: {
      type: "TypeQueryExpressionType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:QueryExpression",
        type: "QueryExpressionType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    logicalOperatorCode: {
      type: "TypeLogicalOperatorCodeType",
      wsdlDefinition: {
        default: "AND",
        name: "logicalOperatorCode",
        type: "LogicalOperatorCodeType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    logicalNegationIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        name: "logicalNegationIndicator",
        type: "IndicatorType",
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
	  ValueExpression: {
      type: "TypeValueExpressionType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ValueExpression",
        type: "ValueExpressionType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    QueryExpression: {
      type: "TypeQueryExpressionType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:QueryExpression",
        type: "QueryExpressionType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    logicalOperatorCode: {
      type: "TypeLogicalOperatorCodeType",
      wsdlDefinition: {
        default: "AND",
        name: "logicalOperatorCode",
        type: "LogicalOperatorCodeType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    logicalNegationIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        name: "logicalNegationIndicator",
        type: "IndicatorType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeQueryExpressionType;
Modeler.register(TypeQueryExpressionType, "TypeQueryExpressionType");
