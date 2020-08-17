var Modeler = require("../Modeler.js");
var className = 'TypeCustomParentInvoiceLineReferenceType';

var TypeCustomParentInvoiceLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomParentInvoiceLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomParentInvoiceLineReferenceType",
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
	  CustomParentInvoiceLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomParentInvoiceLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomParentInvoiceLineReferenceType;
Modeler.register(TypeCustomParentInvoiceLineReferenceType, "TypeCustomParentInvoiceLineReferenceType");
