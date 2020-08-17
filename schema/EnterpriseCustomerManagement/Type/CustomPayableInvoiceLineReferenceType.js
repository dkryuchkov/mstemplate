var Modeler = require("../Modeler.js");
var className = 'TypeCustomPayableInvoiceLineReferenceType';

var TypeCustomPayableInvoiceLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPayableInvoiceLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPayableInvoiceLineReferenceType",
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
	  CustomPayableInvoiceLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPayableInvoiceLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPayableInvoiceLineReferenceType;
Modeler.register(TypeCustomPayableInvoiceLineReferenceType, "TypeCustomPayableInvoiceLineReferenceType");
