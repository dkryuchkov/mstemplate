var Modeler = require("../Modeler.js");
var className = 'TypeGovernmentAgencyReferenceType';

var TypeGovernmentAgencyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  GovernmentAgencyIdentification: {
      type: "TypeGovernmentAgencyIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:GovernmentAgencyIdentification",
        type: "GovernmentAgencyIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomGovernmentAgencyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomGovernmentAgencyReferenceType",
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
	  GovernmentAgencyIdentification: {
      type: "TypeGovernmentAgencyIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:GovernmentAgencyIdentification",
        type: "GovernmentAgencyIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomGovernmentAgencyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomGovernmentAgencyReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeGovernmentAgencyReferenceType;
Modeler.register(TypeGovernmentAgencyReferenceType, "TypeGovernmentAgencyReferenceType");
