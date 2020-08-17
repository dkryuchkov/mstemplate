var Modeler = require("../Modeler.js");
var className = 'ElementRequestForQuoteBidderIdentification';

var ElementRequestForQuoteBidderIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequestForQuoteBidderIdentification: {
      type: "TypeRequestForQuoteBidderIdentificationType",
      wsdlDefinition: {
        name: "RequestForQuoteBidderIdentification",
        type: "RequestForQuoteBidderIdentificationType",
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
	  RequestForQuoteBidderIdentification: {
      type: "TypeRequestForQuoteBidderIdentificationType",
      wsdlDefinition: {
        name: "RequestForQuoteBidderIdentification",
        type: "RequestForQuoteBidderIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRequestForQuoteBidderIdentification;
Modeler.register(ElementRequestForQuoteBidderIdentification, "ElementRequestForQuoteBidderIdentification");
