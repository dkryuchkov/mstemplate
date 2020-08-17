var Modeler = require("../Modeler.js");
var className = 'TypeRemarkType';

var TypeRemarkType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Code: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Code",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a predefine code indicating the kind of remark, e.g., change meter location in system, change meter read instructions, customer high bill complaint, meter seal broken."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Comment: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Comment",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Detail explanation issue identified by the code and follow-up action needed."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  Code: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Code",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a predefine code indicating the kind of remark, e.g., change meter location in system, change meter read instructions, customer high bill complaint, meter seal broken."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Comment: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Comment",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Detail explanation issue identified by the code and follow-up action needed."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRemarkType;
Modeler.register(TypeRemarkType, "TypeRemarkType");
