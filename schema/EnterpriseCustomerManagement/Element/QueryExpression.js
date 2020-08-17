var Modeler = require("../Modeler.js");
var className = 'ElementQueryExpression';

var ElementQueryExpression = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QueryExpression: {
      type: "TypeQueryExpressionType",
      wsdlDefinition: {
        name: "QueryExpression",
        type: "QueryExpressionType",
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
	  QueryExpression: {
      type: "TypeQueryExpressionType",
      wsdlDefinition: {
        name: "QueryExpression",
        type: "QueryExpressionType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementQueryExpression;
Modeler.register(ElementQueryExpression, "ElementQueryExpression");
