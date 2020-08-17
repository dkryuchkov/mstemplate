var Modeler = require("../Modeler.js");
var className = 'TypeCustomFinancialTransactionScheduleLineType';

var TypeCustomFinancialTransactionScheduleLineType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFinancialTransactionScheduleLineType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialTransactionScheduleLineType",
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
	  CustomFinancialTransactionScheduleLineType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialTransactionScheduleLineType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFinancialTransactionScheduleLineType;
Modeler.register(TypeCustomFinancialTransactionScheduleLineType, "TypeCustomFinancialTransactionScheduleLineType");
