var Modeler = require("../Modeler.js");
var className = 'TypeCustomLatestAccountingPeriodReferenceType';

var TypeCustomLatestAccountingPeriodReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomLatestAccountingPeriodReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomLatestAccountingPeriodReferenceType",
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
	  CustomLatestAccountingPeriodReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomLatestAccountingPeriodReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomLatestAccountingPeriodReferenceType;
Modeler.register(TypeCustomLatestAccountingPeriodReferenceType, "TypeCustomLatestAccountingPeriodReferenceType");
