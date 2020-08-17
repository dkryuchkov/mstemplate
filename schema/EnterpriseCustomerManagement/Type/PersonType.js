var Modeler = require("../Modeler.js");
var className = 'TypePersonType';

var TypePersonType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PrimaryClassificationCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PrimaryClassificationCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "This provides the user with the ability to associate a particular classification to a person. It may be a free-form text or a code. It may be defaulted to a primary Person Affiliation or something else. It is configurable by the user. Example values are Faculty, Student, Alumni, etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NameInitial: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:NameInitial",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "Name initials"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GenderCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:GenderCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The gender (male, female, unknown) of the person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MaritalStatusCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MaritalStatusCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Marital status of the person."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BirthDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BirthDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Date the person was born"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeathDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DeathDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Date the person died"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeathPlace: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DeathPlace",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "Place of Death - Free-text field.  The customers will decide whether they want to capture a Country only, or City, State, Country combo."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeathCertificateID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DeathCertificateID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Death Certificate Number."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    VeteranBenefitEligibilityIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:VeteranBenefitEligibilityIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Veteran benefits designation. Indicator whether a person is eligible for veteran's benefit"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Age: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Age",
        type: "PositiveIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Age in Years"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LanguageCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LanguageCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Native Language"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NationalityCountryCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:NationalityCountryCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Primary country of citizenship"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxPayerRegistrationNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaxPayerRegistrationNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Taxpayer registration number, also known as the VAT number."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxPayerIdentificationNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaxPayerIdentificationNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Taxpayer identification number, often unique identifier of person or organization. Can be SSN or income taxpayer ID in US, fiscal code or NIF in Europe"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrimaryLocationTimezoneCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PrimaryLocationTimezoneCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the person's time zone"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BirthPlace: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BirthPlace",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "Where the person was born.  Typically, the city and country"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EthnicityCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EthnicityCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The declared ethnicity of the person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MaritalStatusEffectiveDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MaritalStatusEffectiveDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date when the person's marital status changed"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PersonalIncomeAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PersonalIncomeAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "The estimated gross annual income of the person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RentOrOwnCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RentOrOwnCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the person rents or owns his or her residence. Example of values are: rent, own, lease, and so on"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeceasedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DeceasedIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the person is deceased or not"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BankruptcyIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BankruptcyIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates this person's record is currently experiencing some form of bankruptcy."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ProblematicAccountIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ProblematicAccountIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates this person's record \nis having derogatory accounts and may have impact on spending limits setting, \nextending offers, fraud, etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxLienIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaxLienIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the person has a tax lien on his/her property"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EmployedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EmployedIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the  Person is employed."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TotalDependentCount: {
      type: "TypeNonNegativeIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TotalDependentCount",
        type: "NonNegativeIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "The number of dependents for the person has."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MinorIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MinorIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the person is a Minor"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PersonName: {
      type: "TypePersonNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PersonName",
        type: "PersonNameType",
        "xsd:annotation": {
          "xsd:documentation": "Details of the person's name"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PersonNameUsage: {
      type: "TypePersonNameUsageType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PersonNameUsage",
        type: "PersonNameUsageType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Citizenship: {
      type: "TypeCitizenshipType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Citizenship",
        type: "CitizenshipType",
        "xsd:annotation": {
          "xsd:documentation": "Citizenship records of a person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    EducationRecord: {
      type: "TypeEducationRecordType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:EducationRecord",
        type: "EducationRecordType",
        "xsd:annotation": {
          "xsd:documentation": "Education records of a person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    EmploymentRecord: {
      type: "TypeEmploymentRecordType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:EmploymentRecord",
        type: "EmploymentRecordType",
        "xsd:annotation": {
          "xsd:documentation": "Employment records of a person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PersonInterest: {
      type: "TypePersonInterestType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PersonInterest",
        type: "PersonInterestType",
        "xsd:annotation": {
          "xsd:documentation": "Interests of a person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    LanguageProficiency: {
      type: "TypeLanguageProficiencyType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LanguageProficiency",
        type: "LanguageProficiencyType",
        "xsd:annotation": {
          "xsd:documentation": "Languages known to a person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    MotherMaidenName: {
      type: "TypePersonNameType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MotherMaidenName",
        type: "PersonNameType",
        "xsd:annotation": {
          "xsd:documentation": "The person's mother's maiden name. This information is used to identify the person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PersonCertification: {
      type: "TypePersonCertificationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PersonCertification",
        type: "PersonCertificationType",
        "xsd:annotation": {
          "xsd:documentation": "Certifications of a person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PersonFinancialProfile: {
      type: "TypePersonFinancialProfileType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PersonFinancialProfile",
        type: "PersonFinancialProfileType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PersonDriversLicense: {
      type: "TypePersonDriversLicenseType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PersonDriversLicense",
        type: "PersonDriversLicenseType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PersonAffiliation: {
      type: "TypePersonAffiliationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PersonAffiliation",
        type: "PersonAffiliationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PersonNationalIdentity: {
      type: "TypePersonNationalIdentityType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PersonNationalIdentity",
        type: "PersonNationalIdentityType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PersonProfessionalLicense: {
      type: "TypePersonProfessionalLicenseType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PersonProfessionalLicense",
        type: "PersonProfessionalLicenseType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomPersonType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPersonType",
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
	  PrimaryClassificationCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PrimaryClassificationCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "This provides the user with the ability to associate a particular classification to a person. It may be a free-form text or a code. It may be defaulted to a primary Person Affiliation or something else. It is configurable by the user. Example values are Faculty, Student, Alumni, etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NameInitial: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:NameInitial",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "Name initials"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GenderCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:GenderCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The gender (male, female, unknown) of the person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MaritalStatusCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MaritalStatusCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Marital status of the person."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BirthDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BirthDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Date the person was born"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeathDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DeathDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Date the person died"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeathPlace: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DeathPlace",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "Place of Death - Free-text field.  The customers will decide whether they want to capture a Country only, or City, State, Country combo."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeathCertificateID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DeathCertificateID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Death Certificate Number."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    VeteranBenefitEligibilityIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:VeteranBenefitEligibilityIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Veteran benefits designation. Indicator whether a person is eligible for veteran's benefit"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Age: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Age",
        type: "PositiveIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Age in Years"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LanguageCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LanguageCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Native Language"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NationalityCountryCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:NationalityCountryCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Primary country of citizenship"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxPayerRegistrationNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaxPayerRegistrationNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Taxpayer registration number, also known as the VAT number."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxPayerIdentificationNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaxPayerIdentificationNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Taxpayer identification number, often unique identifier of person or organization. Can be SSN or income taxpayer ID in US, fiscal code or NIF in Europe"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrimaryLocationTimezoneCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PrimaryLocationTimezoneCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the person's time zone"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BirthPlace: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BirthPlace",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "Where the person was born.  Typically, the city and country"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EthnicityCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EthnicityCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The declared ethnicity of the person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MaritalStatusEffectiveDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MaritalStatusEffectiveDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date when the person's marital status changed"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PersonalIncomeAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PersonalIncomeAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "The estimated gross annual income of the person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RentOrOwnCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RentOrOwnCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the person rents or owns his or her residence. Example of values are: rent, own, lease, and so on"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeceasedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DeceasedIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the person is deceased or not"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BankruptcyIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BankruptcyIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates this person's record is currently experiencing some form of bankruptcy."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ProblematicAccountIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ProblematicAccountIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates this person's record \nis having derogatory accounts and may have impact on spending limits setting, \nextending offers, fraud, etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxLienIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaxLienIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the person has a tax lien on his/her property"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EmployedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EmployedIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the  Person is employed."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TotalDependentCount: {
      type: "TypeNonNegativeIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TotalDependentCount",
        type: "NonNegativeIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "The number of dependents for the person has."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MinorIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MinorIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the person is a Minor"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PersonName: {
      type: "TypePersonNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PersonName",
        type: "PersonNameType",
        "xsd:annotation": {
          "xsd:documentation": "Details of the person's name"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PersonNameUsage: {
      type: "TypePersonNameUsageType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PersonNameUsage",
        type: "PersonNameUsageType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Citizenship: {
      type: "TypeCitizenshipType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Citizenship",
        type: "CitizenshipType",
        "xsd:annotation": {
          "xsd:documentation": "Citizenship records of a person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    EducationRecord: {
      type: "TypeEducationRecordType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:EducationRecord",
        type: "EducationRecordType",
        "xsd:annotation": {
          "xsd:documentation": "Education records of a person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    EmploymentRecord: {
      type: "TypeEmploymentRecordType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:EmploymentRecord",
        type: "EmploymentRecordType",
        "xsd:annotation": {
          "xsd:documentation": "Employment records of a person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PersonInterest: {
      type: "TypePersonInterestType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PersonInterest",
        type: "PersonInterestType",
        "xsd:annotation": {
          "xsd:documentation": "Interests of a person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    LanguageProficiency: {
      type: "TypeLanguageProficiencyType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LanguageProficiency",
        type: "LanguageProficiencyType",
        "xsd:annotation": {
          "xsd:documentation": "Languages known to a person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    MotherMaidenName: {
      type: "TypePersonNameType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MotherMaidenName",
        type: "PersonNameType",
        "xsd:annotation": {
          "xsd:documentation": "The person's mother's maiden name. This information is used to identify the person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PersonCertification: {
      type: "TypePersonCertificationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PersonCertification",
        type: "PersonCertificationType",
        "xsd:annotation": {
          "xsd:documentation": "Certifications of a person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PersonFinancialProfile: {
      type: "TypePersonFinancialProfileType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PersonFinancialProfile",
        type: "PersonFinancialProfileType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PersonDriversLicense: {
      type: "TypePersonDriversLicenseType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PersonDriversLicense",
        type: "PersonDriversLicenseType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PersonAffiliation: {
      type: "TypePersonAffiliationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PersonAffiliation",
        type: "PersonAffiliationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PersonNationalIdentity: {
      type: "TypePersonNationalIdentityType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PersonNationalIdentity",
        type: "PersonNationalIdentityType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PersonProfessionalLicense: {
      type: "TypePersonProfessionalLicenseType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PersonProfessionalLicense",
        type: "PersonProfessionalLicenseType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomPersonType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPersonType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePersonType;
Modeler.register(TypePersonType, "TypePersonType");
