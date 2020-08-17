var Modeler = require("../Modeler.js");
var className = 'TypeCustomCreditChargeAuthorizationResponseType';

var TypeCustomCreditChargeAuthorizationResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCreditChargeAuthorizationResponseType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCreditChargeAuthorizationResponseType",
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
	  CustomCreditChargeAuthorizationResponseType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCreditChargeAuthorizationResponseType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCreditChargeAuthorizationResponseType;
Modeler.register(TypeCustomCreditChargeAuthorizationResponseType, "TypeCustomCreditChargeAuthorizationResponseType");
