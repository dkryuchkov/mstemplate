var Modeler = require("../Modeler.js");
var className = 'TypeContainerReferenceType';

var TypeContainerReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ContainerIdentification: {
      type: "TypeContainerIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ContainerIdentification",
        type: "ContainerIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomContainerReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomContainerReferenceType",
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
	  ContainerIdentification: {
      type: "TypeContainerIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ContainerIdentification",
        type: "ContainerIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomContainerReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomContainerReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeContainerReferenceType;
Modeler.register(TypeContainerReferenceType, "TypeContainerReferenceType");
