var Modeler = require("../Modeler.js");
var className = 'ElementRequestForQuoteChargeCategoryIdentification';

var ElementRequestForQuoteChargeCategoryIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequestForQuoteChargeCategoryIdentification: {
      type: "TypeRequestForQuoteChargeCategoryIdentificationType",
      wsdlDefinition: {
        name: "RequestForQuoteChargeCategoryIdentification",
        type: "RequestForQuoteChargeCategoryIdentificationType",
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
	  RequestForQuoteChargeCategoryIdentification: {
      type: "TypeRequestForQuoteChargeCategoryIdentificationType",
      wsdlDefinition: {
        name: "RequestForQuoteChargeCategoryIdentification",
        type: "RequestForQuoteChargeCategoryIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRequestForQuoteChargeCategoryIdentification;
Modeler.register(ElementRequestForQuoteChargeCategoryIdentification, "ElementRequestForQuoteChargeCategoryIdentification");
