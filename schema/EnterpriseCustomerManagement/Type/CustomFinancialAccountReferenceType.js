var Modeler = require("../Modeler.js");
var className = 'TypeCustomFinancialAccountReferenceType';

var TypeCustomFinancialAccountReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFinancialAccountReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialAccountReferenceType",
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
	  CustomFinancialAccountReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialAccountReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFinancialAccountReferenceType;
Modeler.register(TypeCustomFinancialAccountReferenceType, "TypeCustomFinancialAccountReferenceType");
