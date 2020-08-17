var Modeler = require("../Modeler.js");
var className = 'TypeCustomLaborAgreementSecondLevelEmployeeClassificationReferenceType';

var TypeCustomLaborAgreementSecondLevelEmployeeClassificationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomLaborAgreementSecondLevelEmployeeClassificationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomLaborAgreementSecondLevelEmployeeClassificationReferenceType",
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
	  CustomLaborAgreementSecondLevelEmployeeClassificationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomLaborAgreementSecondLevelEmployeeClassificationReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomLaborAgreementSecondLevelEmployeeClassificationReferenceType;
Modeler.register(TypeCustomLaborAgreementSecondLevelEmployeeClassificationReferenceType, "TypeCustomLaborAgreementSecondLevelEmployeeClassificationReferenceType");
