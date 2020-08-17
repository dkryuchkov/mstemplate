var Modeler = require("../Modeler.js");
var className = 'TypeProjectSchedulableResourceReferenceType';

var TypeProjectSchedulableResourceReferenceType = function(json, parentObj) {
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
    ProjectSchedulableResourceIdentification: {
      type: "TypeProjectSchedulableResourceIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ProjectSchedulableResourceIdentification",
        type: "ProjectSchedulableResourceIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomProjectSchedulableResourceReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomProjectSchedulableResourceReferenceType",
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
    ProjectSchedulableResourceIdentification: {
      type: "TypeProjectSchedulableResourceIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ProjectSchedulableResourceIdentification",
        type: "ProjectSchedulableResourceIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomProjectSchedulableResourceReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomProjectSchedulableResourceReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeProjectSchedulableResourceReferenceType;
Modeler.register(TypeProjectSchedulableResourceReferenceType, "TypeProjectSchedulableResourceReferenceType");
