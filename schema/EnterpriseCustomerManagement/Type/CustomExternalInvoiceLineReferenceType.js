var Modeler = require("../Modeler.js");
var className = 'TypeCustomExternalInvoiceLineReferenceType';

var TypeCustomExternalInvoiceLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomExternalInvoiceLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomExternalInvoiceLineReferenceType",
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
	  CustomExternalInvoiceLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomExternalInvoiceLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomExternalInvoiceLineReferenceType;
Modeler.register(TypeCustomExternalInvoiceLineReferenceType, "TypeCustomExternalInvoiceLineReferenceType");
