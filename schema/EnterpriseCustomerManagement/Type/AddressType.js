var Modeler = require("../Modeler.js");
var className = 'TypeAddressType';

var TypeAddressType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FormatCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FormatCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "A code specifying the format of this address"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LineOne: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LineOne",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The first free form line, expressed as text, of an address"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    LineTwo: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LineTwo",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The first second form line, expressed as text, of an address"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    LineThree: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LineThree",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The third free form line, expressed as text, of an address"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    LineFour: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LineFour",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The fourth free form line, expressed as text, of an address"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    LineFive: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LineFive",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The fifth free form line, expressed as text, of an address"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    LineSix: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LineSix",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The sixth free form line, expressed as text, of an address (use a lot for \nlocalization for certain countries)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    LineSeven: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LineSeven",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The seventh free form line, expressed as text, of an address (use a lot for \nlocalization for certain countries)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    LineEight: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LineEight",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The eighth free form line, expressed as text, of an address (use a lot for \nlocalization for certain countries)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    LineNine: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LineNine",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The ninth free form line, expressed as text, of an address (use a lot for \nlocalization for certain countries)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Building: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Building",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "A building name or number. An office park or campus may have several buildings that are distinguished by the building name or number."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Floor: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Floor",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "A floor in a building"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Area: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Area",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to an area of the building such as left wing, right wing etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CityName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:CityName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "The name, expressed as text, of the city, town or village of this address"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    StateName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:StateName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the state in which  the city falls, where applicable"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ProvinceName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ProvinceName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the province where the address is located, if applicable"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    RuralRoute: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:RuralRoute",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Rural Route Number for the address, if applicable"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CountyName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:CountyName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "County Name, if applicable"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CountryCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CountryCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The unique identifier of a country for this address (Reference ISO 3166 and UN/ECE Rec 3)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CountrySubDivisionID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CountrySubDivisionID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "An identification of a country sub-division of this address such as a department in France. To be used only if there is no named term that represents the countrysubdivision concept being expressed"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CitySubDivisionName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:CitySubDivisionName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "A name, expressed as text, of a sub-division of a city for this address, for example a district or borough.  To be used only if there is no named term that represents the citysubdivision concept being expressed"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    DeliveryPointCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DeliveryPointCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "An in-house mail location, expressed as code, for this address"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeliveryPointBarCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DeliveryPointBarCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "A three digit field used in CASS (Coding Accuracy Support System) along with ZIP, ZIP+4 and CRRT Code to automate the postal sortation process and maximize postage discounts."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeliveryPointTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DeliveryPointTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the type of delivery point. ie. \nResidential Curb, Residential NDCBU (Neighborhood Delivery and Collection Box \nUnit), Residential Central, Residential Other, Business Curb, Business NDCBU, \nBusiness Central, Business Other, Exclude from Delivery Statistics...etc"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ProcessingCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ProcessingCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Postal Adress Processing Code"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MoveTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MoveTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "code that identifies what type of move. For examlpe, NCOALINK-USPS Product designed to return the most current address if the \"mover\" filed an NCOA Move card with the USPS and the previous address is an exact match to \nthe USPS NCOA LINK Database a new address will be returned.  For examlpe: F = Family, I = Individual, B = Business or Firm,  Blank = No NCOALink match."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MoveEffectiveDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MoveEffectiveDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The date the Move is in effect"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AttentionOf: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:AttentionOf",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "The name, expressed as text, of a person or department in the organization to whom incoming mail is marked with words such as 'for the attention of' or 'FAO' or 'ATTN' for this address"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CareOf: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:CareOf",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "The name, expressed as text, of a person or organization at this address to whom incoming mail is marked with words such as 'care of' or 'C/O'"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PostalCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PostalCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "A code specifying the postalcode of the address"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LongPostalCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LongPostalCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "A full postalcode of the address, e.g., 94070-3541"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GEOCodeID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:GEOCodeID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "A unique code that represents a geospatial coordinate measurement of an exact geographic location and time at, below, or above the surface of the earth"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InCityLimitIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InCityLimitIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether or not this address is within the taxing boundary of the jurisdiction that's provided in the address."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TimeZoneCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TimeZoneCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Code indicating the time zone of the address, e.g., EST, PST, UTC-8, UTC-5"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomAddressType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomAddressType",
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
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FormatCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FormatCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "A code specifying the format of this address"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LineOne: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LineOne",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The first free form line, expressed as text, of an address"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    LineTwo: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LineTwo",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The first second form line, expressed as text, of an address"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    LineThree: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LineThree",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The third free form line, expressed as text, of an address"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    LineFour: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LineFour",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The fourth free form line, expressed as text, of an address"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    LineFive: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LineFive",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The fifth free form line, expressed as text, of an address"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    LineSix: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LineSix",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The sixth free form line, expressed as text, of an address (use a lot for \nlocalization for certain countries)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    LineSeven: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LineSeven",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The seventh free form line, expressed as text, of an address (use a lot for \nlocalization for certain countries)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    LineEight: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LineEight",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The eighth free form line, expressed as text, of an address (use a lot for \nlocalization for certain countries)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    LineNine: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LineNine",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The ninth free form line, expressed as text, of an address (use a lot for \nlocalization for certain countries)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Building: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Building",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "A building name or number. An office park or campus may have several buildings that are distinguished by the building name or number."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Floor: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Floor",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "A floor in a building"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Area: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Area",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to an area of the building such as left wing, right wing etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CityName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:CityName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "The name, expressed as text, of the city, town or village of this address"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    StateName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:StateName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the state in which  the city falls, where applicable"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ProvinceName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ProvinceName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the province where the address is located, if applicable"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    RuralRoute: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:RuralRoute",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Rural Route Number for the address, if applicable"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CountyName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:CountyName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "County Name, if applicable"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CountryCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CountryCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The unique identifier of a country for this address (Reference ISO 3166 and UN/ECE Rec 3)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CountrySubDivisionID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CountrySubDivisionID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "An identification of a country sub-division of this address such as a department in France. To be used only if there is no named term that represents the countrysubdivision concept being expressed"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CitySubDivisionName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:CitySubDivisionName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "A name, expressed as text, of a sub-division of a city for this address, for example a district or borough.  To be used only if there is no named term that represents the citysubdivision concept being expressed"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    DeliveryPointCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DeliveryPointCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "An in-house mail location, expressed as code, for this address"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeliveryPointBarCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DeliveryPointBarCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "A three digit field used in CASS (Coding Accuracy Support System) along with ZIP, ZIP+4 and CRRT Code to automate the postal sortation process and maximize postage discounts."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeliveryPointTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DeliveryPointTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the type of delivery point. ie. \nResidential Curb, Residential NDCBU (Neighborhood Delivery and Collection Box \nUnit), Residential Central, Residential Other, Business Curb, Business NDCBU, \nBusiness Central, Business Other, Exclude from Delivery Statistics...etc"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ProcessingCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ProcessingCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Postal Adress Processing Code"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MoveTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MoveTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "code that identifies what type of move. For examlpe, NCOALINK-USPS Product designed to return the most current address if the \"mover\" filed an NCOA Move card with the USPS and the previous address is an exact match to \nthe USPS NCOA LINK Database a new address will be returned.  For examlpe: F = Family, I = Individual, B = Business or Firm,  Blank = No NCOALink match."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MoveEffectiveDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MoveEffectiveDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The date the Move is in effect"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AttentionOf: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:AttentionOf",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "The name, expressed as text, of a person or department in the organization to whom incoming mail is marked with words such as 'for the attention of' or 'FAO' or 'ATTN' for this address"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CareOf: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:CareOf",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "The name, expressed as text, of a person or organization at this address to whom incoming mail is marked with words such as 'care of' or 'C/O'"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PostalCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PostalCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "A code specifying the postalcode of the address"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LongPostalCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LongPostalCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "A full postalcode of the address, e.g., 94070-3541"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GEOCodeID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:GEOCodeID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "A unique code that represents a geospatial coordinate measurement of an exact geographic location and time at, below, or above the surface of the earth"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InCityLimitIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InCityLimitIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether or not this address is within the taxing boundary of the jurisdiction that's provided in the address."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TimeZoneCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TimeZoneCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Code indicating the time zone of the address, e.g., EST, PST, UTC-8, UTC-5"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomAddressType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomAddressType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAddressType;
Modeler.register(TypeAddressType, "TypeAddressType");
