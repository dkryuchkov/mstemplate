var Modeler = require("../Modeler.js");
var className = 'TypeClassificationSpecificationGroupReferenceType';

var TypeClassificationSpecificationGroupReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ClassificationCodeIdentification: {
      type: "TypeClassificationCodeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ClassificationCodeIdentification",
        type: "ClassificationCodeIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SpecificationGroupIdentification: {
      type: "TypeSpecificationGroupIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SpecificationGroupIdentification",
        type: "SpecificationGroupIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomClassificationSpecificationGroupReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomClassificationSpecificationGroupReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
	  ClassificationCodeIdentification: {
      type: "TypeClassificationCodeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ClassificationCodeIdentification",
        type: "ClassificationCodeIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SpecificationGroupIdentification: {
      type: "TypeSpecificationGroupIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SpecificationGroupIdentification",
        type: "SpecificationGroupIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomClassificationSpecificationGroupReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomClassificationSpecificationGroupReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeClassificationSpecificationGroupReferenceType;
Modeler.register(TypeClassificationSpecificationGroupReferenceType, "TypeClassificationSpecificationGroupReferenceType");
