var Modeler = require("../Modeler.js");
var className = 'TypeSignatoryGroupReferenceType';

var TypeSignatoryGroupReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SignatoryGroupIdentification: {
      type: "TypeSignatoryGroupIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SignatoryGroupIdentification",
        type: "SignatoryGroupIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomSignatoryGroupReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomSignatoryGroupReferenceType",
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
	  SignatoryGroupIdentification: {
      type: "TypeSignatoryGroupIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SignatoryGroupIdentification",
        type: "SignatoryGroupIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomSignatoryGroupReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomSignatoryGroupReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSignatoryGroupReferenceType;
Modeler.register(TypeSignatoryGroupReferenceType, "TypeSignatoryGroupReferenceType");
