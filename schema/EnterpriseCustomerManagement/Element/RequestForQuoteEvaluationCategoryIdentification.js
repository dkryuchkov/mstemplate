var Modeler = require("../Modeler.js");
var className = 'ElementRequestForQuoteEvaluationCategoryIdentification';

var ElementRequestForQuoteEvaluationCategoryIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequestForQuoteEvaluationCategoryIdentification: {
      type: "TypeRequestForQuoteEvaluationCategoryIdentificationType",
      wsdlDefinition: {
        name: "RequestForQuoteEvaluationCategoryIdentification",
        type: "RequestForQuoteEvaluationCategoryIdentificationType",
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
	  RequestForQuoteEvaluationCategoryIdentification: {
      type: "TypeRequestForQuoteEvaluationCategoryIdentificationType",
      wsdlDefinition: {
        name: "RequestForQuoteEvaluationCategoryIdentification",
        type: "RequestForQuoteEvaluationCategoryIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRequestForQuoteEvaluationCategoryIdentification;
Modeler.register(ElementRequestForQuoteEvaluationCategoryIdentification, "ElementRequestForQuoteEvaluationCategoryIdentification");
