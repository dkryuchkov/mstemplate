var Modeler = require("../Modeler.js");
var className = 'ElementSalaryIncreaseMatrixReference';

var ElementSalaryIncreaseMatrixReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalaryIncreaseMatrixReference: {
      type: "TypeSalaryIncreaseMatrixReferenceType",
      wsdlDefinition: {
        name: "SalaryIncreaseMatrixReference",
        type: "SalaryIncreaseMatrixReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Salary Increase Matrix object. It is used to figure out a salary increase for the Assignment Grade based on a Rating Model."
        },
        ns: "WL5G3N2",
        attribute: false
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
	  SalaryIncreaseMatrixReference: {
      type: "TypeSalaryIncreaseMatrixReferenceType",
      wsdlDefinition: {
        name: "SalaryIncreaseMatrixReference",
        type: "SalaryIncreaseMatrixReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Salary Increase Matrix object. It is used to figure out a salary increase for the Assignment Grade based on a Rating Model."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalaryIncreaseMatrixReference;
Modeler.register(ElementSalaryIncreaseMatrixReference, "ElementSalaryIncreaseMatrixReference");
