var Modeler = require("../Modeler.js");
var className = 'TypeCustomBankPaymentType';

var TypeCustomBankPaymentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBankPaymentType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBankPaymentType",
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
	  CustomBankPaymentType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBankPaymentType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBankPaymentType;
Modeler.register(TypeCustomBankPaymentType, "TypeCustomBankPaymentType");
