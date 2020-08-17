var Modeler = require("../Modeler.js");
var className = 'TypeCustomRequestForQuoteLineReferenceType';

var TypeCustomRequestForQuoteLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomRequestForQuoteLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRequestForQuoteLineReferenceType",
        attribute: false,
        type: "xsd:string"
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
	  CustomRequestForQuoteLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRequestForQuoteLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomRequestForQuoteLineReferenceType;
Modeler.register(TypeCustomRequestForQuoteLineReferenceType, "TypeCustomRequestForQuoteLineReferenceType");
