var Modeler = require("../Modeler.js");
var className = 'TypeCustomServiceCreditCalculationGroupReferenceType';

var TypeCustomServiceCreditCalculationGroupReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomServiceCreditCalculationGroupReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomServiceCreditCalculationGroupReferenceType",
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
	  CustomServiceCreditCalculationGroupReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomServiceCreditCalculationGroupReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomServiceCreditCalculationGroupReferenceType;
Modeler.register(TypeCustomServiceCreditCalculationGroupReferenceType, "TypeCustomServiceCreditCalculationGroupReferenceType");
