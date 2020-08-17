var Modeler = require("../Modeler.js");
var className = 'TypeCustomExternalInvoiceReferenceType';

var TypeCustomExternalInvoiceReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomExternalInvoiceReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomExternalInvoiceReferenceType",
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
	  CustomExternalInvoiceReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomExternalInvoiceReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomExternalInvoiceReferenceType;
Modeler.register(TypeCustomExternalInvoiceReferenceType, "TypeCustomExternalInvoiceReferenceType");
