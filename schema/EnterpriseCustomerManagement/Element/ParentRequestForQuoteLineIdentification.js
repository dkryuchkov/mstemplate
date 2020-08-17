var Modeler = require("../Modeler.js");
var className = 'ElementParentRequestForQuoteLineIdentification';

var ElementParentRequestForQuoteLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentRequestForQuoteLineIdentification: {
      type: "TypeRequestForQuoteIdentificationType",
      wsdlDefinition: {
        name: "ParentRequestForQuoteLineIdentification",
        type: "RequestForQuoteIdentificationType",
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
	  ParentRequestForQuoteLineIdentification: {
      type: "TypeRequestForQuoteIdentificationType",
      wsdlDefinition: {
        name: "ParentRequestForQuoteLineIdentification",
        type: "RequestForQuoteIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentRequestForQuoteLineIdentification;
Modeler.register(ElementParentRequestForQuoteLineIdentification, "ElementParentRequestForQuoteLineIdentification");
