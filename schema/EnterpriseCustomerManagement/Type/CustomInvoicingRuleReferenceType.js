var Modeler = require("../Modeler.js");
var className = 'TypeCustomInvoicingRuleReferenceType';

var TypeCustomInvoicingRuleReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomInvoicingRuleReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomInvoicingRuleReferenceType",
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
	  CustomInvoicingRuleReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomInvoicingRuleReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomInvoicingRuleReferenceType;
Modeler.register(TypeCustomInvoicingRuleReferenceType, "TypeCustomInvoicingRuleReferenceType");
