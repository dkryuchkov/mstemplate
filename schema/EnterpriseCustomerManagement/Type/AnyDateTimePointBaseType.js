var Modeler = require("../Modeler.js");
var className = 'TypeAnyDateTimePointBaseType';

var TypeAnyDateTimePointBaseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AnyDateTimePointBaseType: {
      type: "string",
      wsdlDefinition: {
        name: "AnyDateTimePointBaseType",
        "xsd:annotation": {
          "xsd:documentation": "From UN/CEFACT XML NDR, this is considered a built-in type."
        },
        "xsd:union": {
          memberTypes: "xsd:gYear xsd:gYearMonth xsd:date xsd:dateTime"
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
	  AnyDateTimePointBaseType: {
      type: "string",
      wsdlDefinition: {
        name: "AnyDateTimePointBaseType",
        "xsd:annotation": {
          "xsd:documentation": "From UN/CEFACT XML NDR, this is considered a built-in type."
        },
        "xsd:union": {
          memberTypes: "xsd:gYear xsd:gYearMonth xsd:date xsd:dateTime"
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAnyDateTimePointBaseType;
Modeler.register(TypeAnyDateTimePointBaseType, "TypeAnyDateTimePointBaseType");
