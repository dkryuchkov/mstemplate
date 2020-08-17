var Modeler = require("../Modeler.js");
var className = 'TypeCustomFinancialGoalType';

var TypeCustomFinancialGoalType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFinancialGoalType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialGoalType",
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
	  CustomFinancialGoalType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialGoalType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFinancialGoalType;
Modeler.register(TypeCustomFinancialGoalType, "TypeCustomFinancialGoalType");
