var Modeler = require("../Modeler.js");
var className = 'TypeOrganizationType';

var TypeOrganizationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Name: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Name",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of a party of the Organization party type"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ShortName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ShortName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Short name of the organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Salutation: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Salutation",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "This is the salutation that needs to be used to refer to the organization. Ex. M/S ( Messrs)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    IncorporationLocation: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:IncorporationLocation",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The incorporation place of the organization. E.g. Dingle,Bangalore"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    IncorporationCountryCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IncorporationCountryCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The country in which the orgnization is incorporated"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DUNSInquiryIdentifier: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DUNSInquiryIdentifier",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Identifier used to query the Dun and Bradstreet data. If a location is a branch, then in some countries the headquarters DUNS number is used to do the query. Otherwise it is the same as the DUNS number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LegalStructureCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LegalStructureCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Legal structure. For example, partnership, corporation, and so on"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ControlYear: {
      type: "TypeYearType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ControlYear",
        type: "YearType",
        "xsd:annotation": {
          "xsd:documentation": "Year when current ownership gained control"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TotalEmployeeCount: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TotalEmployeeCount",
        type: "PositiveIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Total number of employees"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LocationUsageCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LocationUsageCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Status of this site. Identifies if the location is the HQ, a branch, or a single location"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OutOfBusinessIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OutOfBusinessIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if this organization is out of business"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LineOfBusiness: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LineOfBusiness",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Type of business activities performed at this site"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CongressionalDistrictCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CongressionalDistrictCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "U.S. Congressional District"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ImportIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ImportIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if this company is an importer"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ExportIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ExportIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if this company is an exporter"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LaborSurplusIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LaborSurplusIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if this company operates in an area with a labor surplus"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MinorityOwnedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MinorityOwnedIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if this company is primarily owned by ethnic or racial minorities"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MinorityOwnedTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MinorityOwnedTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The type of minority-owned firm"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WonamOwnedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WonamOwnedIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if this company is primarily owned by women"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DisadvantagedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DisadvantagedIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if this company is considered disadvantaged by the US governement under Title 8A."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SmallBusinessIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SmallBusinessIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if this company is considered to be a small business"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FacilityOccupancyCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FacilityOccupancyCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if this company owns or rents its place of business"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DunBradstreetCreditRating: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DunBradstreetCreditRating",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Dun and Bradstreet credit rating"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxPayerRegistrationID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaxPayerRegistrationID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Taxpayer identification number, often unique identifier of person or organization. Can be SSN or income taxpayer ID in US, fiscal code or NIF in Europe (Deprecate since FP 3.0. The reason is the name is incorrect. It is replaced with the TaxPayerIdentificationNumberID.)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxPayerIdentificationNumberID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaxPayerIdentificationNumberID",
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
    TaxPayerRegistrationNumberID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaxPayerRegistrationNumberID",
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
    FinancialAnalysisFiscalYear: {
      type: "TypeYearType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialAnalysisFiscalYear",
        type: "YearType",
        "xsd:annotation": {
          "xsd:documentation": "Fiscal year used as the source for financial information"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FiscalYearEndMonth: {
      type: "TypeMonthType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FiscalYearEndMonth",
        type: "MonthType",
        "xsd:annotation": {
          "xsd:documentation": "Month that the fiscal year ends for organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CurrentFiscalYearPotentitalRevenue: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CurrentFiscalYearPotentitalRevenue",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Organization's potential revenue for this fiscal year"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NextFiscalYearPotentitalRevenue: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:NextFiscalYearPotentitalRevenue",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Organization's potential revenue for next fiscal year"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EstablishmentYear: {
      type: "TypeYearType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EstablishmentYear",
        type: "YearType",
        "xsd:annotation": {
          "xsd:documentation": "Year that the organization began doing business"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "User-defined organization types such as region, division, and department"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OperationalScopeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OperationalScopeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The physical class of business in which a business participates. For example, local, national, or international"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxationClassificationCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaxationClassificationCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Taxation classification for corporation entities. For example, Chapter S in the US"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LocalBusinessID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LocalBusinessID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Primary identifier assigned to businesses by government agency, Chamber of Commerce, or other authority. Generally used outside US.  It is the most common business identifier in a country. For example, Chamber of Commerce Number in Italy, Government Registration Number in Taiwan"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PreferredFunctionalCurrencyCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PreferredFunctionalCurrencyCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Organization's default currency code"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RegistrationCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RegistrationCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of registration, such as nonprofit"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SubsidiaryIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SubsidiaryIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if organization is a parent or subsidiary location"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SICCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SICCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Version of Standard Industry Classification (SIC) code"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrivateOwnershipIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PrivateOwnershipIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the organization is privately owned"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LocalActivityClassificationCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LocalActivityClassificationCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Local activity classification code"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InternalIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InternalIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if this is an internal organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SimilarSoundingBusiness: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SimilarSoundingBusiness",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates existence of similarly named business"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    HomeCountryCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:HomeCountryCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Home Country"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StockSymbol: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:StockSymbol",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "Corporate Stock Symbol, e.g. ORCL"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GrowthStrategyDescription: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:GrowthStrategyDescription",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Growth Strategy Description"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    MissionStatement: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:MissionStatement",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Corporate charter of organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ChiefExecutiveOfficerName: {
      type: "TypePersonNameType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ChiefExecutiveOfficerName",
        type: "PersonNameType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrincipalPersonName: {
      type: "TypePersonNameType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PrincipalPersonName",
        type: "PersonNameType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BestCallTimeNote: {
      type: "TypeNoteType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:BestCallTimeNote",
        type: "NoteType",
        "xsd:annotation": {
          "xsd:documentation": "Best time to contact the organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    OrganizationCreditRating: {
      type: "TypeOrganizationCreditRatingType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:OrganizationCreditRating",
        type: "OrganizationCreditRatingType",
        "xsd:annotation": {
          "xsd:documentation": "Credit ratings of an organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    OrganizationCertification: {
      type: "TypeOrganizationCertificationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:OrganizationCertification",
        type: "OrganizationCertificationType",
        "xsd:annotation": {
          "xsd:documentation": "Certifications of an organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    OrganizationFinancialStatement: {
      type: "TypeOrganizationFinancialStatementType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:OrganizationFinancialStatement",
        type: "OrganizationFinancialStatementType",
        "xsd:annotation": {
          "xsd:documentation": "Financial statements of an organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    OrganizationFinancialProfile: {
      type: "TypeOrganizationFinancialProfileType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:OrganizationFinancialProfile",
        type: "OrganizationFinancialProfileType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    OrganizationEmploymentStatistics: {
      type: "TypeOrganizationEmploymentStatisticsType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OrganizationEmploymentStatistics",
        type: "OrganizationEmploymentStatisticsType",
        "xsd:annotation": {
          "xsd:documentation": "Employment statistics of an organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomOrganizationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomOrganizationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IncorporationDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IncorporationDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date on which the organization is legally incorporated."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IncorporationYear: {
      type: "TypeYearType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IncorporationYear",
        type: "YearType",
        "xsd:annotation": {
          "xsd:documentation": "Year that the business was incorporated"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BankPartyReference: {
      type: "TypeBankPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BankPartyReference",
        type: "BankPartyReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BankBranchReference: {
      type: "TypeBankBranchReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BankBranchReference",
        type: "BankBranchReferenceType",
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
	  Name: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Name",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of a party of the Organization party type"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ShortName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ShortName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Short name of the organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Salutation: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Salutation",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "This is the salutation that needs to be used to refer to the organization. Ex. M/S ( Messrs)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    IncorporationLocation: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:IncorporationLocation",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The incorporation place of the organization. E.g. Dingle,Bangalore"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    IncorporationCountryCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IncorporationCountryCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The country in which the orgnization is incorporated"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DUNSInquiryIdentifier: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DUNSInquiryIdentifier",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Identifier used to query the Dun and Bradstreet data. If a location is a branch, then in some countries the headquarters DUNS number is used to do the query. Otherwise it is the same as the DUNS number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LegalStructureCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LegalStructureCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Legal structure. For example, partnership, corporation, and so on"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ControlYear: {
      type: "TypeYearType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ControlYear",
        type: "YearType",
        "xsd:annotation": {
          "xsd:documentation": "Year when current ownership gained control"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TotalEmployeeCount: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TotalEmployeeCount",
        type: "PositiveIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Total number of employees"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LocationUsageCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LocationUsageCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Status of this site. Identifies if the location is the HQ, a branch, or a single location"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OutOfBusinessIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OutOfBusinessIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if this organization is out of business"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LineOfBusiness: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LineOfBusiness",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Type of business activities performed at this site"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CongressionalDistrictCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CongressionalDistrictCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "U.S. Congressional District"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ImportIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ImportIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if this company is an importer"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ExportIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ExportIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if this company is an exporter"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LaborSurplusIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LaborSurplusIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if this company operates in an area with a labor surplus"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MinorityOwnedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MinorityOwnedIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if this company is primarily owned by ethnic or racial minorities"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MinorityOwnedTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MinorityOwnedTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The type of minority-owned firm"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WonamOwnedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WonamOwnedIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if this company is primarily owned by women"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DisadvantagedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DisadvantagedIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if this company is considered disadvantaged by the US governement under Title 8A."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SmallBusinessIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SmallBusinessIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if this company is considered to be a small business"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FacilityOccupancyCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FacilityOccupancyCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if this company owns or rents its place of business"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DunBradstreetCreditRating: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DunBradstreetCreditRating",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Dun and Bradstreet credit rating"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxPayerRegistrationID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaxPayerRegistrationID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Taxpayer identification number, often unique identifier of person or organization. Can be SSN or income taxpayer ID in US, fiscal code or NIF in Europe (Deprecate since FP 3.0. The reason is the name is incorrect. It is replaced with the TaxPayerIdentificationNumberID.)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxPayerIdentificationNumberID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaxPayerIdentificationNumberID",
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
    TaxPayerRegistrationNumberID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaxPayerRegistrationNumberID",
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
    FinancialAnalysisFiscalYear: {
      type: "TypeYearType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialAnalysisFiscalYear",
        type: "YearType",
        "xsd:annotation": {
          "xsd:documentation": "Fiscal year used as the source for financial information"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FiscalYearEndMonth: {
      type: "TypeMonthType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FiscalYearEndMonth",
        type: "MonthType",
        "xsd:annotation": {
          "xsd:documentation": "Month that the fiscal year ends for organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CurrentFiscalYearPotentitalRevenue: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CurrentFiscalYearPotentitalRevenue",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Organization's potential revenue for this fiscal year"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NextFiscalYearPotentitalRevenue: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:NextFiscalYearPotentitalRevenue",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Organization's potential revenue for next fiscal year"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EstablishmentYear: {
      type: "TypeYearType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EstablishmentYear",
        type: "YearType",
        "xsd:annotation": {
          "xsd:documentation": "Year that the organization began doing business"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "User-defined organization types such as region, division, and department"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OperationalScopeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OperationalScopeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The physical class of business in which a business participates. For example, local, national, or international"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxationClassificationCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaxationClassificationCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Taxation classification for corporation entities. For example, Chapter S in the US"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LocalBusinessID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LocalBusinessID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Primary identifier assigned to businesses by government agency, Chamber of Commerce, or other authority. Generally used outside US.  It is the most common business identifier in a country. For example, Chamber of Commerce Number in Italy, Government Registration Number in Taiwan"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PreferredFunctionalCurrencyCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PreferredFunctionalCurrencyCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Organization's default currency code"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RegistrationCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RegistrationCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of registration, such as nonprofit"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SubsidiaryIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SubsidiaryIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if organization is a parent or subsidiary location"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SICCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SICCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Version of Standard Industry Classification (SIC) code"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrivateOwnershipIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PrivateOwnershipIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the organization is privately owned"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LocalActivityClassificationCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LocalActivityClassificationCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Local activity classification code"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InternalIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InternalIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if this is an internal organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SimilarSoundingBusiness: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SimilarSoundingBusiness",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates existence of similarly named business"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    HomeCountryCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:HomeCountryCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Home Country"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StockSymbol: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:StockSymbol",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "Corporate Stock Symbol, e.g. ORCL"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GrowthStrategyDescription: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:GrowthStrategyDescription",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Growth Strategy Description"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    MissionStatement: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:MissionStatement",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Corporate charter of organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ChiefExecutiveOfficerName: {
      type: "TypePersonNameType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ChiefExecutiveOfficerName",
        type: "PersonNameType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrincipalPersonName: {
      type: "TypePersonNameType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PrincipalPersonName",
        type: "PersonNameType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BestCallTimeNote: {
      type: "TypeNoteType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:BestCallTimeNote",
        type: "NoteType",
        "xsd:annotation": {
          "xsd:documentation": "Best time to contact the organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    OrganizationCreditRating: {
      type: "TypeOrganizationCreditRatingType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:OrganizationCreditRating",
        type: "OrganizationCreditRatingType",
        "xsd:annotation": {
          "xsd:documentation": "Credit ratings of an organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    OrganizationCertification: {
      type: "TypeOrganizationCertificationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:OrganizationCertification",
        type: "OrganizationCertificationType",
        "xsd:annotation": {
          "xsd:documentation": "Certifications of an organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    OrganizationFinancialStatement: {
      type: "TypeOrganizationFinancialStatementType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:OrganizationFinancialStatement",
        type: "OrganizationFinancialStatementType",
        "xsd:annotation": {
          "xsd:documentation": "Financial statements of an organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    OrganizationFinancialProfile: {
      type: "TypeOrganizationFinancialProfileType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:OrganizationFinancialProfile",
        type: "OrganizationFinancialProfileType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    OrganizationEmploymentStatistics: {
      type: "TypeOrganizationEmploymentStatisticsType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OrganizationEmploymentStatistics",
        type: "OrganizationEmploymentStatisticsType",
        "xsd:annotation": {
          "xsd:documentation": "Employment statistics of an organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomOrganizationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomOrganizationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IncorporationDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IncorporationDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date on which the organization is legally incorporated."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IncorporationYear: {
      type: "TypeYearType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IncorporationYear",
        type: "YearType",
        "xsd:annotation": {
          "xsd:documentation": "Year that the business was incorporated"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BankPartyReference: {
      type: "TypeBankPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BankPartyReference",
        type: "BankPartyReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BankBranchReference: {
      type: "TypeBankBranchReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BankBranchReference",
        type: "BankBranchReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeOrganizationType;
Modeler.register(TypeOrganizationType, "TypeOrganizationType");
