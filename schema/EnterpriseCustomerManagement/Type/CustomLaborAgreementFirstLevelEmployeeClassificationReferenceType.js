var Modeler = require("../Modeler.js");
var className = 'TypeCustomLaborAgreementFirstLevelEmployeeClassificationReferenceType';

var TypeCustomLaborAgreementFirstLevelEmployeeClassificationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomLaborAgreementFirstLevelEmployeeClassificationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomLaborAgreementFirstLevelEmployeeClassificationReferenceType",
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
	  CustomLaborAgreementFirstLevelEmployeeClassificationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomLaborAgreementFirstLevelEmployeeClassificationReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomLaborAgreementFirstLevelEmployeeClassificationReferenceType;
Modeler.register(TypeCustomLaborAgreementFirstLevelEmployeeClassificationReferenceType, "TypeCustomLaborAgreementFirstLevelEmployeeClassificationReferenceType");
