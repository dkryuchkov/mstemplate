var Modeler = require("../Modeler.js");
var className = 'TypeBillingProfileReferenceType';

var TypeBillingProfileReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BillingProfileIdentification: {
      type: "TypeBillingProfileIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BillingProfileIdentification",
        type: "BillingProfileIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomBillingProfileReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBillingProfileReferenceType",
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
	  BillingProfileIdentification: {
      type: "TypeBillingProfileIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BillingProfileIdentification",
        type: "BillingProfileIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomBillingProfileReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBillingProfileReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeBillingProfileReferenceType;
Modeler.register(TypeBillingProfileReferenceType, "TypeBillingProfileReferenceType");
