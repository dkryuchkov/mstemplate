var Modeler = require("../Modeler.js");
var className = 'TypeJobReferenceType';

var TypeJobReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  JobIdentification: {
      type: "TypeJobIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:JobIdentification",
        type: "JobIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomJobReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomJobReferenceType",
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
	  JobIdentification: {
      type: "TypeJobIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:JobIdentification",
        type: "JobIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomJobReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomJobReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeJobReferenceType;
Modeler.register(TypeJobReferenceType, "TypeJobReferenceType");
