var Modeler = require("../Modeler.js");
var className = 'TypeCustomFinancialAccountPersonHolderType';

var TypeCustomFinancialAccountPersonHolderType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFinancialAccountPersonHolderType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialAccountPersonHolderType",
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
	  CustomFinancialAccountPersonHolderType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialAccountPersonHolderType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFinancialAccountPersonHolderType;
Modeler.register(TypeCustomFinancialAccountPersonHolderType, "TypeCustomFinancialAccountPersonHolderType");
