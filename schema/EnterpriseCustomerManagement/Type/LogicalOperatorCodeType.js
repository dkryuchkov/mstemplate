var Modeler = require("../Modeler.js");
var className = 'TypeLogicalOperatorCodeType';

var TypeLogicalOperatorCodeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LogicalOperatorCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "LogicalOperatorCodeType",
        "xsd:restriction": {
          base: "StringType",
          "xsd:enumeration": [
            {
              value: "AND"
            },
            {
              value: "OR"
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
	  LogicalOperatorCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "LogicalOperatorCodeType",
        "xsd:restriction": {
          base: "StringType",
          "xsd:enumeration": [
            {
              value: "AND"
            },
            {
              value: "OR"
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

module.exports = TypeLogicalOperatorCodeType;
Modeler.register(TypeLogicalOperatorCodeType, "TypeLogicalOperatorCodeType");
