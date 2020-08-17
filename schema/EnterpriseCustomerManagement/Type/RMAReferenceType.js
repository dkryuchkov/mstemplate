var Modeler = require("../Modeler.js");
var className = 'TypeRMAReferenceType';

var TypeRMAReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RMAIdentification: {
      type: "TypeRMAIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RMAIdentification",
        type: "RMAIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomRMAReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomRMAReferenceType",
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
	  RMAIdentification: {
      type: "TypeRMAIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RMAIdentification",
        type: "RMAIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomRMAReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomRMAReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRMAReferenceType;
Modeler.register(TypeRMAReferenceType, "TypeRMAReferenceType");
