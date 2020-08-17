var Modeler = require("../Modeler.js");
var className = 'TypeLocationReferenceType';

var TypeLocationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LocationIdentification: {
      type: "TypeLocationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LocationIdentification",
        type: "LocationIdentificationType",
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
          "xsd:documentation": "Indicates the type of location. Eg. Government building, Prison, \nHospital, Public area such as a shopping mall etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Name: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Name",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "A descriptive name for the location"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Directions: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Directions",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Directions to locate the address"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Address: {
      type: "TypeAddressType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Address",
        type: "AddressType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GeographicalCoordinate: {
      type: "TypeGeographicalCoordinateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:GeographicalCoordinate",
        type: "GeographicalCoordinateType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Description",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Description of the Location"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    LocationParent: {
      type: "TypeLocationParentType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LocationParent",
        type: "LocationParentType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    TimeZoneIdentifier: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TimeZoneIdentifier",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Time zone in which the location is situated."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomLocationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomLocationReferenceType",
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
	  LocationIdentification: {
      type: "TypeLocationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LocationIdentification",
        type: "LocationIdentificationType",
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
          "xsd:documentation": "Indicates the type of location. Eg. Government building, Prison, \nHospital, Public area such as a shopping mall etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Name: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Name",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "A descriptive name for the location"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Directions: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Directions",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Directions to locate the address"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Address: {
      type: "TypeAddressType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Address",
        type: "AddressType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GeographicalCoordinate: {
      type: "TypeGeographicalCoordinateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:GeographicalCoordinate",
        type: "GeographicalCoordinateType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Description",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Description of the Location"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    LocationParent: {
      type: "TypeLocationParentType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LocationParent",
        type: "LocationParentType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    TimeZoneIdentifier: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TimeZoneIdentifier",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Time zone in which the location is situated."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomLocationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomLocationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeLocationReferenceType;
Modeler.register(TypeLocationReferenceType, "TypeLocationReferenceType");
