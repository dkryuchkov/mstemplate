var Modeler = require("../Modeler.js");
var className = 'TypeCustomFreightInvoiceLineReferenceType';

var TypeCustomFreightInvoiceLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFreightInvoiceLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFreightInvoiceLineReferenceType",
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
	  CustomFreightInvoiceLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFreightInvoiceLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFreightInvoiceLineReferenceType;
Modeler.register(TypeCustomFreightInvoiceLineReferenceType, "TypeCustomFreightInvoiceLineReferenceType");
