var Modeler = require("../Modeler.js");
var className = 'TypeChangeIndicatorType';

var TypeChangeIndicatorType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ChangeIndicatorType: {
      type: "string",
      wsdlDefinition: {
        name: "ChangeIndicatorType",
        "xsd:restriction": {
          base: "xsd:string",
          "xsd:enumeration": [
            {
              value: "I"
            },
            {
              value: "D"
            },
            {
              value: "U"
            },
            {
              value: "N"
            },
            {
              value: ""
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
	  ChangeIndicatorType: {
      type: "string",
      wsdlDefinition: {
        name: "ChangeIndicatorType",
        "xsd:restriction": {
          base: "xsd:string",
          "xsd:enumeration": [
            {
              value: "I"
            },
            {
              value: "D"
            },
            {
              value: "U"
            },
            {
              value: "N"
            },
            {
              value: ""
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

module.exports = TypeChangeIndicatorType;
Modeler.register(TypeChangeIndicatorType, "TypeChangeIndicatorType");
