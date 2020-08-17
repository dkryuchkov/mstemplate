var Modeler = require("../Modeler.js");
var className = 'TypeCustomFinancialAccountHolderType';

var TypeCustomFinancialAccountHolderType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFinancialAccountHolderType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialAccountHolderType",
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
	  CustomFinancialAccountHolderType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialAccountHolderType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFinancialAccountHolderType;
Modeler.register(TypeCustomFinancialAccountHolderType, "TypeCustomFinancialAccountHolderType");
