var Modeler = require("../Modeler.js");
var className = 'TypeQueryCriteriaType';

var TypeQueryCriteriaType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QualifiedElementPath: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:QualifiedElementPath",
        type: "StringType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    QueryExpression: {
      type: "TypeQueryExpressionType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:QueryExpression",
        type: "QueryExpressionType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SortElement: {
      type: "TypeSortElementType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:SortElement",
        type: "SortElementType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  QualifiedElementPath: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:QualifiedElementPath",
        type: "StringType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    QueryExpression: {
      type: "TypeQueryExpressionType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:QueryExpression",
        type: "QueryExpressionType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SortElement: {
      type: "TypeSortElementType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:SortElement",
        type: "SortElementType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeQueryCriteriaType;
Modeler.register(TypeQueryCriteriaType, "TypeQueryCriteriaType");
