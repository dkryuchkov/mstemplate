var Modeler = require("../Modeler.js");
var className = 'TypeURIType';

var TypeURIType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  URIType: {
      type: "string",
      wsdlDefinition: {
        name: "URIType",
        "xsd:annotation": {
          "xsd:documentation": "anyURI represents a Uniform Resource Identifier Reference (URI). An anyURI value can be absolute or relative, and may have an optional fragment identifier (i.e., it may be a URI Reference). This type should be used to specify the intention that the value fulfills the role of a URI as defined by [RFC 2396], as amended by [RFC 2732]"
        },
        "xsd:restriction": {
          base: "xsd:anyURI"
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
	  URIType: {
      type: "string",
      wsdlDefinition: {
        name: "URIType",
        "xsd:annotation": {
          "xsd:documentation": "anyURI represents a Uniform Resource Identifier Reference (URI). An anyURI value can be absolute or relative, and may have an optional fragment identifier (i.e., it may be a URI Reference). This type should be used to specify the intention that the value fulfills the role of a URI as defined by [RFC 2396], as amended by [RFC 2732]"
        },
        "xsd:restriction": {
          base: "xsd:anyURI"
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeURIType;
Modeler.register(TypeURIType, "TypeURIType");
