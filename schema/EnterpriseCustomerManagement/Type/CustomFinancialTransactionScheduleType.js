var Modeler = require("../Modeler.js");
var className = 'TypeCustomFinancialTransactionScheduleType';

var TypeCustomFinancialTransactionScheduleType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFinancialTransactionScheduleType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialTransactionScheduleType",
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
	  CustomFinancialTransactionScheduleType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialTransactionScheduleType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFinancialTransactionScheduleType;
Modeler.register(TypeCustomFinancialTransactionScheduleType, "TypeCustomFinancialTransactionScheduleType");
