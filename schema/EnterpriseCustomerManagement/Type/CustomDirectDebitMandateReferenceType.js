var Modeler = require("../Modeler.js");
var className = 'TypeCustomDirectDebitMandateReferenceType';

var TypeCustomDirectDebitMandateReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomDirectDebitMandateReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDirectDebitMandateReferenceType",
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
	  CustomDirectDebitMandateReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDirectDebitMandateReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomDirectDebitMandateReferenceType;
Modeler.register(TypeCustomDirectDebitMandateReferenceType, "TypeCustomDirectDebitMandateReferenceType");
