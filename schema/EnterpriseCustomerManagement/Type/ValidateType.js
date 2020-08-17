var Modeler = require("../Modeler.js");
var className = 'TypeValidateType';

var TypeValidateType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ValidateType: {
      type: "string",
      wsdlDefinition: {
        name: "ValidateType",
        "xsd:attribute": {
          name: "responseCode",
          type: "ResponseCodeType",
          use: "optional",
          attribute: true
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    responseCode: {
      type: "TypeResponseCodeType",
      wsdlDefinition: {
        name: "responseCode",
        type: "ResponseCodeType",
        use: "optional",
        attribute: true
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
	  ValidateType: {
      type: "string",
      wsdlDefinition: {
        name: "ValidateType",
        "xsd:attribute": {
          name: "responseCode",
          type: "ResponseCodeType",
          use: "optional",
          attribute: true
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    responseCode: {
      type: "TypeResponseCodeType",
      wsdlDefinition: {
        name: "responseCode",
        type: "ResponseCodeType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeValidateType;
Modeler.register(TypeValidateType, "TypeValidateType");
