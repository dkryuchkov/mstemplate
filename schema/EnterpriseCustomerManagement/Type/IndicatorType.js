var Modeler = require("../Modeler.js");
var className = 'TypeIndicatorType';

var TypeIndicatorType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  IndicatorType: {
      type: "string",
      wsdlDefinition: {
        name: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "A list of two mutually exclusive Boolean values that express the only possible states of a Property"
        },
        "xsd:restriction": {
          base: "xsd:boolean",
          "xsd:pattern": [
            {
              value: "false"
            },
            {
              value: "true"
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
	  IndicatorType: {
      type: "string",
      wsdlDefinition: {
        name: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "A list of two mutually exclusive Boolean values that express the only possible states of a Property"
        },
        "xsd:restriction": {
          base: "xsd:boolean",
          "xsd:pattern": [
            {
              value: "false"
            },
            {
              value: "true"
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

module.exports = TypeIndicatorType;
Modeler.register(TypeIndicatorType, "TypeIndicatorType");
