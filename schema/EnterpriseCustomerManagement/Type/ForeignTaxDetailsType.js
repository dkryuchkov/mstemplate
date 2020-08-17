var Modeler = require("../Modeler.js");
var className = 'TypeForeignTaxDetailsType';

var TypeForeignTaxDetailsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ID: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:ID",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastUpdated: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LastUpdated",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastUpdatedBySystem: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LastUpdatedBySystem",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastUpdatedUser: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LastUpdatedUser",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreatedBySystem: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CreatedBySystem",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreatedUser: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CreatedUser",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxResidencyBankNotifiedEndDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:TaxResidencyBankNotifiedEndDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RecordStatus: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:RecordStatus",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OrganizationId: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:OrganizationId",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OrganizationName: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:OrganizationName",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxResidencyBankNotifiedStartDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:TaxResidencyBankNotifiedStartDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxResidenceCountryCode: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:TaxResidenceCountryCode",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NoTaxIdentificationNumberReasonExplanation: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:NoTaxIdentificationNumberReasonExplanation",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NoTaxIdentificationNumberReasonCode: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:NoTaxIdentificationNumberReasonCode",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxIdentificationNumber: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:TaxIdentificationNumber",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IdentificationType: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:IdentificationType",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
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
	  ID: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:ID",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastUpdated: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LastUpdated",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastUpdatedBySystem: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LastUpdatedBySystem",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastUpdatedUser: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LastUpdatedUser",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreatedBySystem: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CreatedBySystem",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreatedUser: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CreatedUser",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxResidencyBankNotifiedEndDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:TaxResidencyBankNotifiedEndDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RecordStatus: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:RecordStatus",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OrganizationId: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:OrganizationId",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OrganizationName: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:OrganizationName",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxResidencyBankNotifiedStartDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:TaxResidencyBankNotifiedStartDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxResidenceCountryCode: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:TaxResidenceCountryCode",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NoTaxIdentificationNumberReasonExplanation: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:NoTaxIdentificationNumberReasonExplanation",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NoTaxIdentificationNumberReasonCode: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:NoTaxIdentificationNumberReasonCode",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxIdentificationNumber: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:TaxIdentificationNumber",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IdentificationType: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:IdentificationType",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeForeignTaxDetailsType;
Modeler.register(TypeForeignTaxDetailsType, "TypeForeignTaxDetailsType");
