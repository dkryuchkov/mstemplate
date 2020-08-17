var Modeler = require("../Modeler.js");
var className = 'TypeSyncResponseType';

var TypeSyncResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  StatusCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:StatusCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "To indicate the status of each response instance against the original sync request"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ResponseMessage: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ResponseMessage",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "A free form message used to capture information or comments in the sync response"
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
	  StatusCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:StatusCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "To indicate the status of each response instance against the original sync request"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ResponseMessage: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ResponseMessage",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "A free form message used to capture information or comments in the sync response"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSyncResponseType;
Modeler.register(TypeSyncResponseType, "TypeSyncResponseType");
