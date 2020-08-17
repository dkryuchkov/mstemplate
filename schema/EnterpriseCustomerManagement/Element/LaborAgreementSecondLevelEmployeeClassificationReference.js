var Modeler = require("../Modeler.js");
var className = 'ElementLaborAgreementSecondLevelEmployeeClassificationReference';

var ElementLaborAgreementSecondLevelEmployeeClassificationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LaborAgreementSecondLevelEmployeeClassificationReference: {
      type: "TypeLaborAgreementSecondLevelEmployeeClassificationReferenceType",
      wsdlDefinition: {
        name: "LaborAgreementSecondLevelEmployeeClassificationReference",
        type: "LaborAgreementSecondLevelEmployeeClassificationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Labor Agreement Second Level Employee Classification object. Second level classification can be used to create tiered pay rate on the Labor Agreement. It defines a subcategory that applies to the worker. This field is a level under the category. For example, if the 'Grad and Engnr' has been defined in the \ncategory field, the 'Graduate' or 'Engineer' values can be defined in the subcategory."
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
	  LaborAgreementSecondLevelEmployeeClassificationReference: {
      type: "TypeLaborAgreementSecondLevelEmployeeClassificationReferenceType",
      wsdlDefinition: {
        name: "LaborAgreementSecondLevelEmployeeClassificationReference",
        type: "LaborAgreementSecondLevelEmployeeClassificationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Labor Agreement Second Level Employee Classification object. Second level classification can be used to create tiered pay rate on the Labor Agreement. It defines a subcategory that applies to the worker. This field is a level under the category. For example, if the 'Grad and Engnr' has been defined in the \ncategory field, the 'Graduate' or 'Engineer' values can be defined in the subcategory."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementLaborAgreementSecondLevelEmployeeClassificationReference;
Modeler.register(ElementLaborAgreementSecondLevelEmployeeClassificationReference, "ElementLaborAgreementSecondLevelEmployeeClassificationReference");
