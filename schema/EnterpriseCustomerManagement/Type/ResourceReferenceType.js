var Modeler = require("../Modeler.js");
var className = 'TypeResourceReferenceType';

var TypeResourceReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ResourceIdentification: {
      type: "TypeResourceIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ResourceIdentification",
        type: "ResourceIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomResourceReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomResourceReferenceType",
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
	  ResourceIdentification: {
      type: "TypeResourceIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ResourceIdentification",
        type: "ResourceIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomResourceReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomResourceReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeResourceReferenceType;
Modeler.register(TypeResourceReferenceType, "TypeResourceReferenceType");
