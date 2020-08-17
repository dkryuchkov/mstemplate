var Modeler = require("../Modeler.js");
var className = 'ElementRMAReference';

var ElementRMAReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RMAReference: {
      type: "TypeRMAReferenceType",
      wsdlDefinition: {
        name: "RMAReference",
        type: "RMAReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Return Material Authorization"
        },
        ns: "WL5G3N2",
        attribute: false
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
	  RMAReference: {
      type: "TypeRMAReferenceType",
      wsdlDefinition: {
        name: "RMAReference",
        type: "RMAReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Return Material Authorization"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRMAReference;
Modeler.register(ElementRMAReference, "ElementRMAReference");
