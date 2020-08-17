var Modeler = require("../Modeler.js");
var className = 'TypeAnyDateTimePointPrecisionCodeType';

var TypeAnyDateTimePointPrecisionCodeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AnyDateTimePointPrecisionCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "AnyDateTimePointPrecisionCodeType",
        "xsd:restriction": {
          base: "StringType",
          "xsd:enumeration": [
            {
              value: "Year"
            },
            {
              value: "YearMonth"
            },
            {
              value: "Date"
            },
            {
              value: "DateTime"
            }
          ]
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
	  AnyDateTimePointPrecisionCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "AnyDateTimePointPrecisionCodeType",
        "xsd:restriction": {
          base: "StringType",
          "xsd:enumeration": [
            {
              value: "Year"
            },
            {
              value: "YearMonth"
            },
            {
              value: "Date"
            },
            {
              value: "DateTime"
            }
          ]
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAnyDateTimePointPrecisionCodeType;
Modeler.register(TypeAnyDateTimePointPrecisionCodeType, "TypeAnyDateTimePointPrecisionCodeType");
