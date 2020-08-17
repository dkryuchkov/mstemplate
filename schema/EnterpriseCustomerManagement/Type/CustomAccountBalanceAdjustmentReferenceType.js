var Modeler = require("../Modeler.js");
var className = 'TypeCustomAccountBalanceAdjustmentReferenceType';

var TypeCustomAccountBalanceAdjustmentReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomAccountBalanceAdjustmentReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomAccountBalanceAdjustmentReferenceType",
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
	  CustomAccountBalanceAdjustmentReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomAccountBalanceAdjustmentReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomAccountBalanceAdjustmentReferenceType;
Modeler.register(TypeCustomAccountBalanceAdjustmentReferenceType, "TypeCustomAccountBalanceAdjustmentReferenceType");
