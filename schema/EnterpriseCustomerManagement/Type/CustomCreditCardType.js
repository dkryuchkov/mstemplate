var Modeler = require("../Modeler.js");
var className = 'TypeCustomCreditCardType';

var TypeCustomCreditCardType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCreditCardType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCreditCardType",
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
	  CustomCreditCardType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCreditCardType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCreditCardType;
Modeler.register(TypeCustomCreditCardType, "TypeCustomCreditCardType");
