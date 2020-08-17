var Modeler = require("../Modeler.js");
var className = 'ElementSalaryIncreaseMatrixIdentification';

var ElementSalaryIncreaseMatrixIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalaryIncreaseMatrixIdentification: {
      type: "TypeSalaryIncreaseMatrixIdentificationType",
      wsdlDefinition: {
        name: "SalaryIncreaseMatrixIdentification",
        type: "SalaryIncreaseMatrixIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of Salary Increase Matrix object"
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
	  SalaryIncreaseMatrixIdentification: {
      type: "TypeSalaryIncreaseMatrixIdentificationType",
      wsdlDefinition: {
        name: "SalaryIncreaseMatrixIdentification",
        type: "SalaryIncreaseMatrixIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of Salary Increase Matrix object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalaryIncreaseMatrixIdentification;
Modeler.register(ElementSalaryIncreaseMatrixIdentification, "ElementSalaryIncreaseMatrixIdentification");
