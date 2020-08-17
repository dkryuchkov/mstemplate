var Modeler = require("../Modeler.js");
var className = 'TypeCustomLaborAgreementReferenceType';

var TypeCustomLaborAgreementReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomLaborAgreementReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomLaborAgreementReferenceType",
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
	  CustomLaborAgreementReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomLaborAgreementReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomLaborAgreementReferenceType;
Modeler.register(TypeCustomLaborAgreementReferenceType, "TypeCustomLaborAgreementReferenceType");
