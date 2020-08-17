var Modeler = require("../Modeler.js");
var className = 'TypeCustomRequestForQuoteReferenceType';

var TypeCustomRequestForQuoteReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomRequestForQuoteReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRequestForQuoteReferenceType",
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
	  CustomRequestForQuoteReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRequestForQuoteReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomRequestForQuoteReferenceType;
Modeler.register(TypeCustomRequestForQuoteReferenceType, "TypeCustomRequestForQuoteReferenceType");
