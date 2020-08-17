var Modeler = require("../Modeler.js");
var className = 'TypeLanguageCodeType';

var TypeLanguageCodeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LanguageCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "LanguageCodeType",
        "xsd:restriction": {
          base: "StringType"
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
	  LanguageCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "LanguageCodeType",
        "xsd:restriction": {
          base: "StringType"
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeLanguageCodeType;
Modeler.register(TypeLanguageCodeType, "TypeLanguageCodeType");
