var Modeler = require("../Modeler.js");
var className = 'TypeRelatedServiceRequestReferenceType';

var TypeRelatedServiceRequestReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ServiceRequestIdentification: {
      type: "TypeServiceRequestIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ServiceRequestIdentification",
        type: "ServiceRequestIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "A unique Identification for Related Service Request"
        },
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
          "xsd:documentation": "Description for Related ServiceRequest Reference"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    RelationshipCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RelationshipCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "A Code describing the relationship of Service Request to other Service Requests."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomRelatedServiceRequestReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomRelatedServiceRequestReferenceType",
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
	  ServiceRequestIdentification: {
      type: "TypeServiceRequestIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ServiceRequestIdentification",
        type: "ServiceRequestIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "A unique Identification for Related Service Request"
        },
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
          "xsd:documentation": "Description for Related ServiceRequest Reference"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    RelationshipCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RelationshipCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "A Code describing the relationship of Service Request to other Service Requests."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomRelatedServiceRequestReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomRelatedServiceRequestReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRelatedServiceRequestReferenceType;
Modeler.register(TypeRelatedServiceRequestReferenceType, "TypeRelatedServiceRequestReferenceType");
