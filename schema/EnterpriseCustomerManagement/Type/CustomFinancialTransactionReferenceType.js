var Modeler = require("../Modeler.js");
var className = 'TypeCustomFinancialTransactionReferenceType';

var TypeCustomFinancialTransactionReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFinancialTransactionReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialTransactionReferenceType",
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
	  CustomFinancialTransactionReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialTransactionReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFinancialTransactionReferenceType;
Modeler.register(TypeCustomFinancialTransactionReferenceType, "TypeCustomFinancialTransactionReferenceType");
