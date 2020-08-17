var Modeler = require("../Modeler.js");
var className = 'TypeCustomInvoiceIdentificationType';

var TypeCustomInvoiceIdentificationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomInvoiceIdentificationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomInvoiceIdentificationType",
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
	  CustomInvoiceIdentificationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomInvoiceIdentificationType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomInvoiceIdentificationType;
Modeler.register(TypeCustomInvoiceIdentificationType, "TypeCustomInvoiceIdentificationType");
