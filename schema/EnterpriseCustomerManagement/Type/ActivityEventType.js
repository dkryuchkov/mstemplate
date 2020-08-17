var Modeler = require("../Modeler.js");
var className = 'TypeActivityEventType';

var TypeActivityEventType = function(json, parentObj) {
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
    PlannedStartDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PlannedStartDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Date time at which the activity has been planned or scheduled to take place"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ExpectedStartDateTime: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ExpectedStartDateTime",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "When the Planned Start Date Time is no longer realistic, this is the new expected date of when the activity will occur. The Planned Start Date Time does not change for tracking purposes."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ActualStartDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ActualStartDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "This record the date time at which the activity has taken place"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ActualCompletionDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ActualCompletionDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Date time at which the activity has been completed"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AssignedWorkerReference: {
      type: "TypeWorkerReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AssignedWorkerReference",
        type: "WorkerReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ActivityEventStatusHistory: {
      type: "TypeActivityEventStatusHistoryType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ActivityEventStatusHistory",
        type: "ActivityEventStatusHistoryType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Activity: {
      type: "TypeActivityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Activity",
        type: "ActivityType",
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
    PlannedStartDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PlannedStartDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Date time at which the activity has been planned or scheduled to take place"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ExpectedStartDateTime: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ExpectedStartDateTime",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "When the Planned Start Date Time is no longer realistic, this is the new expected date of when the activity will occur. The Planned Start Date Time does not change for tracking purposes."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ActualStartDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ActualStartDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "This record the date time at which the activity has taken place"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ActualCompletionDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ActualCompletionDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Date time at which the activity has been completed"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AssignedWorkerReference: {
      type: "TypeWorkerReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AssignedWorkerReference",
        type: "WorkerReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ActivityEventStatusHistory: {
      type: "TypeActivityEventStatusHistoryType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ActivityEventStatusHistory",
        type: "ActivityEventStatusHistoryType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Activity: {
      type: "TypeActivityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Activity",
        type: "ActivityType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeActivityEventType;
Modeler.register(TypeActivityEventType, "TypeActivityEventType");
