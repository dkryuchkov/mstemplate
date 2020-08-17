var Modeler = require("../Modeler.js");
var className = 'TypeCustomPaymentTermType';

var TypeCustomPaymentTermType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPaymentTermType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPaymentTermType",
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
	  CustomPaymentTermType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPaymentTermType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPaymentTermType;
Modeler.register(TypeCustomPaymentTermType, "TypeCustomPaymentTermType");
