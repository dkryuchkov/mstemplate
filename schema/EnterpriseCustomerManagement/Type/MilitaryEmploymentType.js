var Modeler = require("../Modeler.js");
var className = 'TypeMilitaryEmploymentType';

var TypeMilitaryEmploymentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Rank: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Rank",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "The person's rank in the branch"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MilitaryBranchCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MilitaryBranchCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Military branch code"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MilitaryServiceLocationName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:MilitaryServiceLocationName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Where the person performed military service"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    MilitaryStationName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:MilitaryStationName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Station name"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomMilitaryEmploymentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomMilitaryEmploymentType",
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
	  Rank: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Rank",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "The person's rank in the branch"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MilitaryBranchCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MilitaryBranchCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Military branch code"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MilitaryServiceLocationName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:MilitaryServiceLocationName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Where the person performed military service"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    MilitaryStationName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:MilitaryStationName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Station name"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomMilitaryEmploymentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomMilitaryEmploymentType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeMilitaryEmploymentType;
Modeler.register(TypeMilitaryEmploymentType, "TypeMilitaryEmploymentType");
