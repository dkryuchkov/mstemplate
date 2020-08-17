var Modeler = require("../Modeler.js");
var className = 'TypeCustomSalaryIncreaseMatrixReferenceType';

var TypeCustomSalaryIncreaseMatrixReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSalaryIncreaseMatrixReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSalaryIncreaseMatrixReferenceType",
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
	  CustomSalaryIncreaseMatrixReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSalaryIncreaseMatrixReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSalaryIncreaseMatrixReferenceType;
Modeler.register(TypeCustomSalaryIncreaseMatrixReferenceType, "TypeCustomSalaryIncreaseMatrixReferenceType");
