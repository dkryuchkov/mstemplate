var Modeler = require("../Modeler.js");
var className = 'TypeCustomDisbursedPaymentReferenceType';

var TypeCustomDisbursedPaymentReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomDisbursedPaymentReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDisbursedPaymentReferenceType",
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
	  CustomDisbursedPaymentReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDisbursedPaymentReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomDisbursedPaymentReferenceType;
Modeler.register(TypeCustomDisbursedPaymentReferenceType, "TypeCustomDisbursedPaymentReferenceType");
