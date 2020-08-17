var Modeler = require("../Modeler.js");
var className = 'TypeCustomDebitChargeAuthorizationResponseType';

var TypeCustomDebitChargeAuthorizationResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomDebitChargeAuthorizationResponseType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDebitChargeAuthorizationResponseType",
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
	  CustomDebitChargeAuthorizationResponseType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDebitChargeAuthorizationResponseType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomDebitChargeAuthorizationResponseType;
Modeler.register(TypeCustomDebitChargeAuthorizationResponseType, "TypeCustomDebitChargeAuthorizationResponseType");
