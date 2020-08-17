var Modeler = require("../Modeler.js");
var className = 'TypeProvisioningOrderReferenceType';

var TypeProvisioningOrderReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProvisioningOrderIdentification: {
      type: "TypeProvisioningOrderIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ProvisioningOrderIdentification",
        type: "ProvisioningOrderIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomProvisioningOrderReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomProvisioningOrderReferenceType",
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
	  ProvisioningOrderIdentification: {
      type: "TypeProvisioningOrderIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ProvisioningOrderIdentification",
        type: "ProvisioningOrderIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomProvisioningOrderReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomProvisioningOrderReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeProvisioningOrderReferenceType;
Modeler.register(TypeProvisioningOrderReferenceType, "TypeProvisioningOrderReferenceType");
