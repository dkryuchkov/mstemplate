var Modeler = require("../Modeler.js");
var className = 'TypeCustomAccountingPeriodReferenceType';

var TypeCustomAccountingPeriodReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomAccountingPeriodReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomAccountingPeriodReferenceType",
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
	  CustomAccountingPeriodReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomAccountingPeriodReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomAccountingPeriodReferenceType;
Modeler.register(TypeCustomAccountingPeriodReferenceType, "TypeCustomAccountingPeriodReferenceType");
