var Modeler = require("../Modeler.js");
var className = 'TypeStringType';

var TypeStringType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  StringType: {
      type: "string",
      wsdlDefinition: {
        name: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "The string datatype represents character strings in XML. The value space of string is the set of finite-length sequences of characters (as defined in [XML 1.0 (Second Edition)]) that match the Char production from [XML 1.0 (Second Edition)]. A character is an atomic unit of communication; it is not further specified except to note that every character has a corresponding Universal Character Set code point, which is an integer"
        },
        "xsd:restriction": {
          base: "xsd:string"
        },
        attribute: false,
        type: "xsd:string"
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
	  StringType: {
      type: "string",
      wsdlDefinition: {
        name: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "The string datatype represents character strings in XML. The value space of string is the set of finite-length sequences of characters (as defined in [XML 1.0 (Second Edition)]) that match the Char production from [XML 1.0 (Second Edition)]. A character is an atomic unit of communication; it is not further specified except to note that every character has a corresponding Universal Character Set code point, which is an integer"
        },
        "xsd:restriction": {
          base: "xsd:string"
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeStringType;
Modeler.register(TypeStringType, "TypeStringType");
