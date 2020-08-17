var Modeler = require("../Modeler.js");
var className = 'TypeProcessType';

var TypeProcessType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProcessType: {
      type: "string",
      wsdlDefinition: {
        name: "ProcessType",
        "xsd:attribute": [
          {
            name: "operation",
            type: "StringType",
            use: "optional",
            attribute: true
          },
          {
            name: "responseCode",
            type: "ResponseCodeType",
            use: "optional",
            attribute: true
          }
        ],
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    operation: {
      type: "TypeStringType",
      wsdlDefinition: {
        name: "operation",
        type: "StringType",
        use: "optional",
        attribute: true
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
	  ProcessType: {
      type: "string",
      wsdlDefinition: {
        name: "ProcessType",
        "xsd:attribute": [
          {
            name: "operation",
            type: "StringType",
            use: "optional",
            attribute: true
          },
          {
            name: "responseCode",
            type: "ResponseCodeType",
            use: "optional",
            attribute: true
          }
        ],
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    operation: {
      type: "TypeStringType",
      wsdlDefinition: {
        name: "operation",
        type: "StringType",
        use: "optional",
        attribute: true
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

module.exports = TypeProcessType;
Modeler.register(TypeProcessType, "TypeProcessType");
