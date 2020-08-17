var Modeler = require("../Modeler.js");
var className = 'TypeCustomDebitChargeAuthorizationReferenceType';

var TypeCustomDebitChargeAuthorizationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomDebitChargeAuthorizationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDebitChargeAuthorizationReferenceType",
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
	  CustomDebitChargeAuthorizationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDebitChargeAuthorizationReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomDebitChargeAuthorizationReferenceType;
Modeler.register(TypeCustomDebitChargeAuthorizationReferenceType, "TypeCustomDebitChargeAuthorizationReferenceType");
