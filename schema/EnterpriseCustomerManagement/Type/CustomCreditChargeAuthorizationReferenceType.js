var Modeler = require("../Modeler.js");
var className = 'TypeCustomCreditChargeAuthorizationReferenceType';

var TypeCustomCreditChargeAuthorizationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCreditChargeAuthorizationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCreditChargeAuthorizationReferenceType",
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
	  CustomCreditChargeAuthorizationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCreditChargeAuthorizationReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCreditChargeAuthorizationReferenceType;
Modeler.register(TypeCustomCreditChargeAuthorizationReferenceType, "TypeCustomCreditChargeAuthorizationReferenceType");
