var Modeler = require("../Modeler.js");
var className = 'TypeCustomInvoiceLineReferenceType';

var TypeCustomInvoiceLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomInvoiceLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomInvoiceLineReferenceType",
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
	  CustomInvoiceLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomInvoiceLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomInvoiceLineReferenceType;
Modeler.register(TypeCustomInvoiceLineReferenceType, "TypeCustomInvoiceLineReferenceType");
