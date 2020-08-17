var Modeler = require("../Modeler.js");
var className = 'TypeCustomQuoteLineReferenceType';

var TypeCustomQuoteLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomQuoteLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomQuoteLineReferenceType",
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
	  CustomQuoteLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomQuoteLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomQuoteLineReferenceType;
Modeler.register(TypeCustomQuoteLineReferenceType, "TypeCustomQuoteLineReferenceType");
