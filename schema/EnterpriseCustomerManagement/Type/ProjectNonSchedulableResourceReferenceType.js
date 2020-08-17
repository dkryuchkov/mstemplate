var Modeler = require("../Modeler.js");
var className = 'TypeProjectNonSchedulableResourceReferenceType';

var TypeProjectNonSchedulableResourceReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProjectResourceSetIdentification: {
      type: "TypeProjectResourceSetIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ProjectResourceSetIdentification",
        type: "ProjectResourceSetIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ProjectNonSchedulableResourceIdentification: {
      type: "TypeProjectNonSchedulableResourceIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ProjectNonSchedulableResourceIdentification",
        type: "ProjectNonSchedulableResourceIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomProjectNonSchedulableResourceReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomProjectNonSchedulableResourceReferenceType",
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
	  ProjectResourceSetIdentification: {
      type: "TypeProjectResourceSetIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ProjectResourceSetIdentification",
        type: "ProjectResourceSetIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ProjectNonSchedulableResourceIdentification: {
      type: "TypeProjectNonSchedulableResourceIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ProjectNonSchedulableResourceIdentification",
        type: "ProjectNonSchedulableResourceIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomProjectNonSchedulableResourceReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomProjectNonSchedulableResourceReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeProjectNonSchedulableResourceReferenceType;
Modeler.register(TypeProjectNonSchedulableResourceReferenceType, "TypeProjectNonSchedulableResourceReferenceType");
