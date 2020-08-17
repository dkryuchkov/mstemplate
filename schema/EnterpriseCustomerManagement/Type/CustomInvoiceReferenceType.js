var Modeler = require("../Modeler.js");
var className = 'TypeCustomInvoiceReferenceType';

var TypeCustomInvoiceReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomInvoiceReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomInvoiceReferenceType",
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
	  CustomInvoiceReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomInvoiceReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomInvoiceReferenceType;
Modeler.register(TypeCustomInvoiceReferenceType, "TypeCustomInvoiceReferenceType");
