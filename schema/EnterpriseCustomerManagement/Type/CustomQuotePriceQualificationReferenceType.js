var Modeler = require("../Modeler.js");
var className = 'TypeCustomQuotePriceQualificationReferenceType';

var TypeCustomQuotePriceQualificationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomQuotePriceQualificationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomQuotePriceQualificationReferenceType",
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
	  CustomQuotePriceQualificationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomQuotePriceQualificationReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomQuotePriceQualificationReferenceType;
Modeler.register(TypeCustomQuotePriceQualificationReferenceType, "TypeCustomQuotePriceQualificationReferenceType");
