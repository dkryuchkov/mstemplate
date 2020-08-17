var Modeler = require("../Modeler.js");
var className = 'TypeAuditHistoryType';

var TypeAuditHistoryType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreatedBy: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreatedBy",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Captures who created the record"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreatedDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreatedDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Captures the created date time"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    UpdatedBy: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:UpdatedBy",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Captures who last updated the record"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    UpdatedDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:UpdatedDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Captures the last updated date time"
        },
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
	  CreatedBy: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreatedBy",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Captures who created the record"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreatedDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreatedDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Captures the created date time"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    UpdatedBy: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:UpdatedBy",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Captures who last updated the record"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    UpdatedDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:UpdatedDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Captures the last updated date time"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAuditHistoryType;
Modeler.register(TypeAuditHistoryType, "TypeAuditHistoryType");
