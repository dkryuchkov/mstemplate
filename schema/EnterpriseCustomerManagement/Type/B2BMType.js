var Modeler = require("../Modeler.js");
var className = 'TypeB2BMType';

var TypeB2BMType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  B2BMHeader: {
      type: "TypeB2BMHeaderType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:B2BMHeader",
        type: "B2BMHeaderType",
        "xsd:annotation": {
          "xsd:documentation": "Header information describing the B2B document and trading partner identifiers"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Payload: {
      type: "TypeanyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Payload",
        type: "xsd:anyType",
        "xsd:annotation": {
          "xsd:documentation": "This element contains the actual B2B document being exchanged between trading partners"
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
	  B2BMHeader: {
      type: "TypeB2BMHeaderType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:B2BMHeader",
        type: "B2BMHeaderType",
        "xsd:annotation": {
          "xsd:documentation": "Header information describing the B2B document and trading partner identifiers"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Payload: {
      type: "TypeanyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Payload",
        type: "xsd:anyType",
        "xsd:annotation": {
          "xsd:documentation": "This element contains the actual B2B document being exchanged between trading partners"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeB2BMType;
Modeler.register(TypeB2BMType, "TypeB2BMType");
