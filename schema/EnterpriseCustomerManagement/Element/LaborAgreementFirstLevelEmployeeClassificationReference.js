var Modeler = require("../Modeler.js");
var className = 'ElementLaborAgreementFirstLevelEmployeeClassificationReference';

var ElementLaborAgreementFirstLevelEmployeeClassificationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LaborAgreementFirstLevelEmployeeClassificationReference: {
      type: "TypeLaborAgreementFirstLevelEmployeeClassificationReferenceType",
      wsdlDefinition: {
        name: "LaborAgreementFirstLevelEmployeeClassificationReference",
        type: "LaborAgreementFirstLevelEmployeeClassificationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Labor Agreement First Level Employee Classification object. First level classification can be used to create tiered pay rate on the labor agreement. It defines a category that applies to the worker. Sample classifications are Monthly EE, Executive, Full Time, etc."
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
	  LaborAgreementFirstLevelEmployeeClassificationReference: {
      type: "TypeLaborAgreementFirstLevelEmployeeClassificationReferenceType",
      wsdlDefinition: {
        name: "LaborAgreementFirstLevelEmployeeClassificationReference",
        type: "LaborAgreementFirstLevelEmployeeClassificationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Labor Agreement First Level Employee Classification object. First level classification can be used to create tiered pay rate on the labor agreement. It defines a category that applies to the worker. Sample classifications are Monthly EE, Executive, Full Time, etc."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementLaborAgreementFirstLevelEmployeeClassificationReference;
Modeler.register(ElementLaborAgreementFirstLevelEmployeeClassificationReference, "ElementLaborAgreementFirstLevelEmployeeClassificationReference");
