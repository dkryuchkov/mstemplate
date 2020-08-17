var Modeler = require("../Modeler.js");
var className = 'TypeCustomDebitCardType';

var TypeCustomDebitCardType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomDebitCardType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDebitCardType",
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
	  CustomDebitCardType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDebitCardType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomDebitCardType;
Modeler.register(TypeCustomDebitCardType, "TypeCustomDebitCardType");
