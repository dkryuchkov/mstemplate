var Modeler = require("../Modeler.js");
var className = 'ElementRequestForQuoteEvaluatorIdentification';

var ElementRequestForQuoteEvaluatorIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequestForQuoteEvaluatorIdentification: {
      type: "TypeRequestForQuoteEvaluatorIdentificationType",
      wsdlDefinition: {
        name: "RequestForQuoteEvaluatorIdentification",
        type: "RequestForQuoteEvaluatorIdentificationType",
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
	  RequestForQuoteEvaluatorIdentification: {
      type: "TypeRequestForQuoteEvaluatorIdentificationType",
      wsdlDefinition: {
        name: "RequestForQuoteEvaluatorIdentification",
        type: "RequestForQuoteEvaluatorIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRequestForQuoteEvaluatorIdentification;
Modeler.register(ElementRequestForQuoteEvaluatorIdentification, "ElementRequestForQuoteEvaluatorIdentification");
