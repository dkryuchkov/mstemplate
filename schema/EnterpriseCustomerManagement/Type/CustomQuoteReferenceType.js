var Modeler = require("../Modeler.js");
var className = 'TypeCustomQuoteReferenceType';

var TypeCustomQuoteReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomQuoteReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomQuoteReferenceType",
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
	  CustomQuoteReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomQuoteReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomQuoteReferenceType;
Modeler.register(TypeCustomQuoteReferenceType, "TypeCustomQuoteReferenceType");
