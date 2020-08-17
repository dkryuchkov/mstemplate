var Modeler = require("../Modeler.js");
var className = 'TypeCustomFreightInvoiceReferenceType';

var TypeCustomFreightInvoiceReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFreightInvoiceReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFreightInvoiceReferenceType",
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
	  CustomFreightInvoiceReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFreightInvoiceReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFreightInvoiceReferenceType;
Modeler.register(TypeCustomFreightInvoiceReferenceType, "TypeCustomFreightInvoiceReferenceType");
