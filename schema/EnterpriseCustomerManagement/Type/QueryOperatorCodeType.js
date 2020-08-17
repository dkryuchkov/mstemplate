var Modeler = require("../Modeler.js");
var className = 'TypeQueryOperatorCodeType';

var TypeQueryOperatorCodeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QueryOperatorCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "QueryOperatorCodeType",
        "xsd:restriction": {
          base: "StringType",
          "xsd:enumeration": [
            {
              value: "EQUALS"
            },
            {
              value: "NOT_EQUALS"
            },
            {
              value: "GREATER_THAN"
            },
            {
              value: "GREATER_THAN_EQUALS"
            },
            {
              value: "LESS_THAN"
            },
            {
              value: "LESS_THAN_EQUALS"
            },
            {
              value: "CONTAINS"
            },
            {
              value: "DOES_NOT_CONTAIN"
            },
            {
              value: "LIKE"
            },
            {
              value: "NOT_LIKE"
            },
            {
              value: "LIKE_IGNORE_CASE"
            },
            {
              value: "NOT_LIKE_IGNORE_CASE"
            },
            {
              value: "IS_BLANK"
            },
            {
              value: "IS_NOT_BLANK"
            },
            {
              value: "BETWEEN"
            },
            {
              value: "NOT_BETWEEN"
            },
            {
              value: "IN"
            },
            {
              value: "NOT_IN"
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
	  QueryOperatorCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "QueryOperatorCodeType",
        "xsd:restriction": {
          base: "StringType",
          "xsd:enumeration": [
            {
              value: "EQUALS"
            },
            {
              value: "NOT_EQUALS"
            },
            {
              value: "GREATER_THAN"
            },
            {
              value: "GREATER_THAN_EQUALS"
            },
            {
              value: "LESS_THAN"
            },
            {
              value: "LESS_THAN_EQUALS"
            },
            {
              value: "CONTAINS"
            },
            {
              value: "DOES_NOT_CONTAIN"
            },
            {
              value: "LIKE"
            },
            {
              value: "NOT_LIKE"
            },
            {
              value: "LIKE_IGNORE_CASE"
            },
            {
              value: "NOT_LIKE_IGNORE_CASE"
            },
            {
              value: "IS_BLANK"
            },
            {
              value: "IS_NOT_BLANK"
            },
            {
              value: "BETWEEN"
            },
            {
              value: "NOT_BETWEEN"
            },
            {
              value: "IN"
            },
            {
              value: "NOT_IN"
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

module.exports = TypeQueryOperatorCodeType;
Modeler.register(TypeQueryOperatorCodeType, "TypeQueryOperatorCodeType");
