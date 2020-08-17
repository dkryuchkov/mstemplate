var Modeler = require("../Modeler.js");
var className = 'TypeDateType';

var TypeDateType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DateType: {
      type: "string",
      wsdlDefinition: {
        name: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "One calendar day according the Gregorian calendar"
        },
        "xsd:restriction": {
          base: "xsd:date"
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
	  DateType: {
      type: "string",
      wsdlDefinition: {
        name: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "One calendar day according the Gregorian calendar"
        },
        "xsd:restriction": {
          base: "xsd:date"
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDateType;
Modeler.register(TypeDateType, "TypeDateType");
