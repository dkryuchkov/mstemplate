var Modeler = require("../Modeler.js");
var className = 'TypeServiceRequestReferenceType';

var TypeServiceRequestReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ServiceRequestIdentification: {
      type: "TypeServiceRequestIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ServiceRequestIdentification",
        type: "ServiceRequestIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomServiceRequestReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomServiceRequestReferenceType",
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
	  ServiceRequestIdentification: {
      type: "TypeServiceRequestIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ServiceRequestIdentification",
        type: "ServiceRequestIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomServiceRequestReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomServiceRequestReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeServiceRequestReferenceType;
Modeler.register(TypeServiceRequestReferenceType, "TypeServiceRequestReferenceType");
