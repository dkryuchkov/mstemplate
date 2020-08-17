var Modeler = require("../Modeler.js");
var className = 'TypeCustomPayableInvoiceReferenceType';

var TypeCustomPayableInvoiceReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPayableInvoiceReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPayableInvoiceReferenceType",
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
	  CustomPayableInvoiceReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPayableInvoiceReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPayableInvoiceReferenceType;
Modeler.register(TypeCustomPayableInvoiceReferenceType, "TypeCustomPayableInvoiceReferenceType");
