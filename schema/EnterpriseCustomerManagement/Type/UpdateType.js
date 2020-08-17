var Modeler = require("../Modeler.js");
var className = 'TypeUpdateType';

var TypeUpdateType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UpdateType: {
      type: "string",
      wsdlDefinition: {
        name: "UpdateType",
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
	  UpdateType: {
      type: "string",
      wsdlDefinition: {
        name: "UpdateType",
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

module.exports = TypeUpdateType;
Modeler.register(TypeUpdateType, "TypeUpdateType");
