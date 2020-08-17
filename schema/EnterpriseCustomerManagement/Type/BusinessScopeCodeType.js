var Modeler = require("../Modeler.js");
var className = 'TypeBusinessScopeCodeType';

var TypeBusinessScopeCodeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BusinessScopeCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "BusinessScopeCodeType",
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
	  BusinessScopeCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "BusinessScopeCodeType",
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

module.exports = TypeBusinessScopeCodeType;
Modeler.register(TypeBusinessScopeCodeType, "TypeBusinessScopeCodeType");
