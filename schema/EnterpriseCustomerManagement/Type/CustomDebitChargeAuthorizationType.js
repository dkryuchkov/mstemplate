var Modeler = require("../Modeler.js");
var className = 'TypeCustomDebitChargeAuthorizationType';

var TypeCustomDebitChargeAuthorizationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomDebitChargeAuthorizationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDebitChargeAuthorizationType",
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
	  CustomDebitChargeAuthorizationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDebitChargeAuthorizationType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomDebitChargeAuthorizationType;
Modeler.register(TypeCustomDebitChargeAuthorizationType, "TypeCustomDebitChargeAuthorizationType");
