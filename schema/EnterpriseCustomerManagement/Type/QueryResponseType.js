var Modeler = require("../Modeler.js");
var className = 'TypeQueryResponseType';

var TypeQueryResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QueryResponseType: {
      type: "string",
      wsdlDefinition: {
        name: "QueryResponseType",
        "xsd:annotation": {
          "xsd:documentation": "The relevanceScore attribute of QueryResponse can be used to indicate a ranking or scoring of each response instance against the original query request"
        },
        "xsd:attribute": {
          name: "relevanceScore",
          type: "NumericType",
          use: "optional",
          attribute: true
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    relevanceScore: {
      type: "TypeNumericType",
      wsdlDefinition: {
        name: "relevanceScore",
        type: "NumericType",
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
	  QueryResponseType: {
      type: "string",
      wsdlDefinition: {
        name: "QueryResponseType",
        "xsd:annotation": {
          "xsd:documentation": "The relevanceScore attribute of QueryResponse can be used to indicate a ranking or scoring of each response instance against the original query request"
        },
        "xsd:attribute": {
          name: "relevanceScore",
          type: "NumericType",
          use: "optional",
          attribute: true
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    relevanceScore: {
      type: "TypeNumericType",
      wsdlDefinition: {
        name: "relevanceScore",
        type: "NumericType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeQueryResponseType;
Modeler.register(TypeQueryResponseType, "TypeQueryResponseType");
