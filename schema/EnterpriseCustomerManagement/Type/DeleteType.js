var Modeler = require("../Modeler.js");
var className = 'TypeDeleteType';

var TypeDeleteType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DeleteType: {
      type: "string",
      wsdlDefinition: {
        name: "DeleteType",
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
	  DeleteType: {
      type: "string",
      wsdlDefinition: {
        name: "DeleteType",
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

module.exports = TypeDeleteType;
Modeler.register(TypeDeleteType, "TypeDeleteType");
