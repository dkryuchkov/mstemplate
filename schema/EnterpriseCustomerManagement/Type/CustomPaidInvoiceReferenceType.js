var Modeler = require("../Modeler.js");
var className = 'TypeCustomPaidInvoiceReferenceType';

var TypeCustomPaidInvoiceReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPaidInvoiceReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPaidInvoiceReferenceType",
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
	  CustomPaidInvoiceReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPaidInvoiceReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPaidInvoiceReferenceType;
Modeler.register(TypeCustomPaidInvoiceReferenceType, "TypeCustomPaidInvoiceReferenceType");
