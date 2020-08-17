var Modeler = require("../Modeler.js");
var className = 'TypeSortDirectionCodeType';

var TypeSortDirectionCodeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SortDirectionCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "SortDirectionCodeType",
        "xsd:restriction": {
          base: "StringType",
          "xsd:enumeration": [
            {
              value: "ASC"
            },
            {
              value: "DESC"
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
	  SortDirectionCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "SortDirectionCodeType",
        "xsd:restriction": {
          base: "StringType",
          "xsd:enumeration": [
            {
              value: "ASC"
            },
            {
              value: "DESC"
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

module.exports = TypeSortDirectionCodeType;
Modeler.register(TypeSortDirectionCodeType, "TypeSortDirectionCodeType");
