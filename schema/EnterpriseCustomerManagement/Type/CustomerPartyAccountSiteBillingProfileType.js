var Modeler = require("../Modeler.js");
var className = 'TypeCustomerPartyAccountSiteBillingProfileType';

var TypeCustomerPartyAccountSiteBillingProfileType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BillingProfileIdentification: {
      type: "TypeBillingProfileIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BillingProfileIdentification",
        type: "BillingProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Billing preferences applicable for this Customer Site"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyAccountSiteBillingProfileType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyAccountSiteBillingProfileType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "WL5G3N2:ActionCodeType",
        use: "optional",
        attribute: true
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
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BillingProfileIdentification: {
      type: "TypeBillingProfileIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BillingProfileIdentification",
        type: "BillingProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Billing preferences applicable for this Customer Site"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyAccountSiteBillingProfileType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyAccountSiteBillingProfileType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "WL5G3N2:ActionCodeType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomerPartyAccountSiteBillingProfileType;
Modeler.register(TypeCustomerPartyAccountSiteBillingProfileType, "TypeCustomerPartyAccountSiteBillingProfileType");
