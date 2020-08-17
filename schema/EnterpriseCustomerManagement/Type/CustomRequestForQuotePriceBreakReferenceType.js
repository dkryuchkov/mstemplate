var Modeler = require("../Modeler.js");
var className = 'TypeCustomRequestForQuotePriceBreakReferenceType';

var TypeCustomRequestForQuotePriceBreakReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomRequestForQuotePriceBreakReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRequestForQuotePriceBreakReferenceType",
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
	  CustomRequestForQuotePriceBreakReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRequestForQuotePriceBreakReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomRequestForQuotePriceBreakReferenceType;
Modeler.register(TypeCustomRequestForQuotePriceBreakReferenceType, "TypeCustomRequestForQuotePriceBreakReferenceType");
