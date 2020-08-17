var Modeler = require("../Modeler.js");
var className = 'TypeCustomFinancialAccountBalanceType';

var TypeCustomFinancialAccountBalanceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFinancialAccountBalanceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialAccountBalanceType",
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
	  CustomFinancialAccountBalanceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialAccountBalanceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFinancialAccountBalanceType;
Modeler.register(TypeCustomFinancialAccountBalanceType, "TypeCustomFinancialAccountBalanceType");
