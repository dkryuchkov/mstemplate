var Modeler = require("../Modeler.js");
var className = 'TypeMonthType';

var TypeMonthType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MonthType: {
      type: "string",
      wsdlDefinition: {
        name: "MonthType",
        "xsd:restriction": {
          base: "xsd:normalizedString",
          "xsd:pattern": [
            {
              value: "01"
            },
            {
              value: "02"
            },
            {
              value: "03"
            },
            {
              value: "04"
            },
            {
              value: "05"
            },
            {
              value: "06"
            },
            {
              value: "07"
            },
            {
              value: "08"
            },
            {
              value: "09"
            },
            {
              value: "10"
            },
            {
              value: "11"
            },
            {
              value: "12"
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
	  MonthType: {
      type: "string",
      wsdlDefinition: {
        name: "MonthType",
        "xsd:restriction": {
          base: "xsd:normalizedString",
          "xsd:pattern": [
            {
              value: "01"
            },
            {
              value: "02"
            },
            {
              value: "03"
            },
            {
              value: "04"
            },
            {
              value: "05"
            },
            {
              value: "06"
            },
            {
              value: "07"
            },
            {
              value: "08"
            },
            {
              value: "09"
            },
            {
              value: "10"
            },
            {
              value: "11"
            },
            {
              value: "12"
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

module.exports = TypeMonthType;
Modeler.register(TypeMonthType, "TypeMonthType");
