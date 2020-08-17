var Modeler = require("../Modeler.js");
var className = 'TypeCustomLaborAgreementThirdLevelEmployeeClassificationReferenceType';

var TypeCustomLaborAgreementThirdLevelEmployeeClassificationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomLaborAgreementThirdLevelEmployeeClassificationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomLaborAgreementThirdLevelEmployeeClassificationReferenceType",
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
	  CustomLaborAgreementThirdLevelEmployeeClassificationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomLaborAgreementThirdLevelEmployeeClassificationReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomLaborAgreementThirdLevelEmployeeClassificationReferenceType;
Modeler.register(TypeCustomLaborAgreementThirdLevelEmployeeClassificationReferenceType, "TypeCustomLaborAgreementThirdLevelEmployeeClassificationReferenceType");
