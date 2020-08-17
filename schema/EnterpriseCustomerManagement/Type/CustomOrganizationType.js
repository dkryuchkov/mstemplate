var Modeler = require("../Modeler.js");
var className = 'TypeCustomOrganizationType';

var TypeCustomOrganizationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ABNDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ABNDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ABNStatus: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ABNStatus",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ACNARBN: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ACNARBN",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ANZSICCode: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ANZSICCode",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    APRAOrganisationType: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:APRAOrganisationType",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BrokerAgreementHeldFlag: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:BrokerAgreementHeldFlag",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BrokerBusinessModel: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:BrokerBusinessModel",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CashOrTermDeposits: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:CashOrTermDeposits",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CopyAttached: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:CopyAttached",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CopyOfReviewHeld: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:CopyOfReviewHeld",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DateOfBrokerAgreement: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:DateOfBrokerAgreement",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DebtInsurance: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:DebtInsurance",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Description",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EstablishmentDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:EstablishmentDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GeneralInsurance: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:GeneralInsurance",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GroupKeyContactFlag: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:GroupKeyContactFlag",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    HomePage: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:HomePage",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IdentityVerificationStage: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:IdentityVerificationStage",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LegalStatus: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:LegalStatus",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LendingBookValue: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:LendingBookValue",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LendingSettledPastYear: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:LendingSettledPastYear",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LetterOfAuthority: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:LetterOfAuthority",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MailingName: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:MailingName",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NumberOfBranches: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:NumberOfBranches",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OtherRegistrationDetails: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:OtherRegistrationDetails",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TFNExemptionDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:TFNExemptionDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TrailCommissionRebateFlag: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:TrailCommissionRebateFlag",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TrustType: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:TrustType",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TrustVestDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:TrustVestDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    UpfrontCommissionRebateFlag: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:UpfrontCommissionRebateFlag",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FATCAConflictingInformationReason: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:FATCAConflictingInformationReason",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FATCAConflictingInformationReasonDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:FATCAConflictingInformationReasonDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FATCACuredDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:FATCACuredDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OrganizationIncorporatedinUS: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:OrganizationIncorporatedinUS",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    USFederalEmployerIdentificationNoEIN: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:USFederalEmployerIdentificationNoEIN",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FATCAStatus: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:FATCAStatus",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FATCAStatusOtherReason: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:FATCAStatusOtherReason",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FATCAFinancialInstitutionIndicator: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:FATCAFinancialInstitutionIndicator",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GlobalIntermediaryIdentificationNumberGIIN: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:GlobalIntermediaryIdentificationNumberGIIN",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FATCAPassiveIncomeWUSCtrlPersonIndicator: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:FATCAPassiveIncomeWUSCtrlPersonIndicator",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ForeignControllingInterestIndicator: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ForeignControllingInterestIndicator",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ABNChangeIndicator: {
      type: "TypeChangeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ABNChangeIndicator",
        type: "ChangeIndicatorType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ARBNChangeIndicator: {
      type: "TypeChangeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ARBNChangeIndicator",
        type: "ChangeIndicatorType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ANZSICCodeChangeIndicator: {
      type: "TypeChangeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ANZSICCodeChangeIndicator",
        type: "ChangeIndicatorType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StatusChangeIndicator: {
      type: "TypeChangeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:StatusChangeIndicator",
        type: "ChangeIndicatorType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrimaryHomePhone: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:PrimaryHomePhone",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrimaryMobilePhone: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:PrimaryMobilePhone",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrimaryWorkPhone: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:PrimaryWorkPhone",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrimaryEmailAddress: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:PrimaryEmailAddress",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
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
	  ABNDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ABNDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ABNStatus: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ABNStatus",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ACNARBN: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ACNARBN",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ANZSICCode: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ANZSICCode",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    APRAOrganisationType: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:APRAOrganisationType",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BrokerAgreementHeldFlag: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:BrokerAgreementHeldFlag",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BrokerBusinessModel: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:BrokerBusinessModel",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CashOrTermDeposits: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:CashOrTermDeposits",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CopyAttached: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:CopyAttached",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CopyOfReviewHeld: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:CopyOfReviewHeld",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DateOfBrokerAgreement: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:DateOfBrokerAgreement",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DebtInsurance: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:DebtInsurance",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Description",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EstablishmentDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:EstablishmentDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GeneralInsurance: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:GeneralInsurance",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GroupKeyContactFlag: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:GroupKeyContactFlag",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    HomePage: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:HomePage",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IdentityVerificationStage: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:IdentityVerificationStage",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LegalStatus: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:LegalStatus",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LendingBookValue: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:LendingBookValue",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LendingSettledPastYear: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:LendingSettledPastYear",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LetterOfAuthority: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:LetterOfAuthority",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MailingName: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:MailingName",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NumberOfBranches: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:NumberOfBranches",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OtherRegistrationDetails: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:OtherRegistrationDetails",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TFNExemptionDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:TFNExemptionDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TrailCommissionRebateFlag: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:TrailCommissionRebateFlag",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TrustType: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:TrustType",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TrustVestDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:TrustVestDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    UpfrontCommissionRebateFlag: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:UpfrontCommissionRebateFlag",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FATCAConflictingInformationReason: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:FATCAConflictingInformationReason",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FATCAConflictingInformationReasonDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:FATCAConflictingInformationReasonDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FATCACuredDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:FATCACuredDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OrganizationIncorporatedinUS: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:OrganizationIncorporatedinUS",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    USFederalEmployerIdentificationNoEIN: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:USFederalEmployerIdentificationNoEIN",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FATCAStatus: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:FATCAStatus",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FATCAStatusOtherReason: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:FATCAStatusOtherReason",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FATCAFinancialInstitutionIndicator: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:FATCAFinancialInstitutionIndicator",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GlobalIntermediaryIdentificationNumberGIIN: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:GlobalIntermediaryIdentificationNumberGIIN",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FATCAPassiveIncomeWUSCtrlPersonIndicator: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:FATCAPassiveIncomeWUSCtrlPersonIndicator",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ForeignControllingInterestIndicator: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ForeignControllingInterestIndicator",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ABNChangeIndicator: {
      type: "TypeChangeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ABNChangeIndicator",
        type: "ChangeIndicatorType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ARBNChangeIndicator: {
      type: "TypeChangeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ARBNChangeIndicator",
        type: "ChangeIndicatorType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ANZSICCodeChangeIndicator: {
      type: "TypeChangeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ANZSICCodeChangeIndicator",
        type: "ChangeIndicatorType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StatusChangeIndicator: {
      type: "TypeChangeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:StatusChangeIndicator",
        type: "ChangeIndicatorType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrimaryHomePhone: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:PrimaryHomePhone",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrimaryMobilePhone: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:PrimaryMobilePhone",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrimaryWorkPhone: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:PrimaryWorkPhone",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrimaryEmailAddress: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:PrimaryEmailAddress",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomOrganizationType;
Modeler.register(TypeCustomOrganizationType, "TypeCustomOrganizationType");
