var Modeler = require("../Modeler.js");
var className = 'TypeCreateType';

var TypeCreateType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreateType: {
      type: "string",
      wsdlDefinition: {
        name: "CreateType",
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
	  CreateType: {
      type: "string",
      wsdlDefinition: {
        name: "CreateType",
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

module.exports = TypeCreateType;
Modeler.register(TypeCreateType, "TypeCreateType");
