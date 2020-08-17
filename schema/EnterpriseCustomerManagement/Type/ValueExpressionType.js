var Modeler = require("../Modeler.js");
var className = 'TypeValueExpressionType';

var TypeValueExpressionType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ElementPath: {
      type: "TypeStringType",
      wsdlDefinition: {
        name: "WL5G3N2:ElementPath",
        type: "StringType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Value: {
      type: "TypeStringType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Value",
        type: "StringType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    queryOperatorCode: {
      type: "TypeQueryOperatorCodeType",
      wsdlDefinition: {
        default: "EQUALS",
        name: "queryOperatorCode",
        type: "QueryOperatorCodeType",
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
	  ElementPath: {
      type: "TypeStringType",
      wsdlDefinition: {
        name: "WL5G3N2:ElementPath",
        type: "StringType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Value: {
      type: "TypeStringType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Value",
        type: "StringType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    queryOperatorCode: {
      type: "TypeQueryOperatorCodeType",
      wsdlDefinition: {
        default: "EQUALS",
        name: "queryOperatorCode",
        type: "QueryOperatorCodeType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeValueExpressionType;
Modeler.register(TypeValueExpressionType, "TypeValueExpressionType");
