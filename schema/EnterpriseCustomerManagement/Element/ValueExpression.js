var Modeler = require("../Modeler.js");
var className = 'ElementValueExpression';

var ElementValueExpression = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ValueExpression: {
      type: "TypeValueExpressionType",
      wsdlDefinition: {
        name: "ValueExpression",
        type: "ValueExpressionType",
        ns: "WL5G3N2",
        attribute: false
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
        name: "ValueExpression",
        type: "ValueExpressionType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementValueExpression;
Modeler.register(ElementValueExpression, "ElementValueExpression");
