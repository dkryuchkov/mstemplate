var Modeler = require("../Modeler.js");
var className = 'ElementLaborAgreementThirdLevelEmployeeClassificationReference';

var ElementLaborAgreementThirdLevelEmployeeClassificationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LaborAgreementThirdLevelEmployeeClassificationReference: {
      type: "TypeLaborAgreementThirdLevelEmployeeClassificationReferenceType",
      wsdlDefinition: {
        name: "LaborAgreementThirdLevelEmployeeClassificationReference",
        type: "LaborAgreementThirdLevelEmployeeClassificationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Labor Agreement Third Level Employee Classification object. This third level classification (subcategory 2) can be used to create tiered pay rate on the Labor Agreement. It defines finer subcategory level that applies to the worker. This field is a level under the subcategory. For example, if the 'Grad and Engnr' has been defined in the category field, the 'Graduate' or 'Engineer' values can be defined in the subcategory. In the subcategory 2  of the 'Engineer' subcategory, the values 'First Level Principal' and 'Second Level Principal' can be defined."
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
	  LaborAgreementThirdLevelEmployeeClassificationReference: {
      type: "TypeLaborAgreementThirdLevelEmployeeClassificationReferenceType",
      wsdlDefinition: {
        name: "LaborAgreementThirdLevelEmployeeClassificationReference",
        type: "LaborAgreementThirdLevelEmployeeClassificationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Labor Agreement Third Level Employee Classification object. This third level classification (subcategory 2) can be used to create tiered pay rate on the Labor Agreement. It defines finer subcategory level that applies to the worker. This field is a level under the subcategory. For example, if the 'Grad and Engnr' has been defined in the category field, the 'Graduate' or 'Engineer' values can be defined in the subcategory. In the subcategory 2  of the 'Engineer' subcategory, the values 'First Level Principal' and 'Second Level Principal' can be defined."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementLaborAgreementThirdLevelEmployeeClassificationReference;
Modeler.register(ElementLaborAgreementThirdLevelEmployeeClassificationReference, "ElementLaborAgreementThirdLevelEmployeeClassificationReference");
