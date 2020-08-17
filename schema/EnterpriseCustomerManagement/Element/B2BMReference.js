var Modeler = require("../Modeler.js");
var className = 'ElementB2BMReference';

var ElementB2BMReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  B2BMReference: {
      type: "TypeB2BMReferenceType",
      wsdlDefinition: {
        name: "B2BMReference",
        type: "B2BMReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference element contains details of the B2B header being referred"
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
	  B2BMReference: {
      type: "TypeB2BMReferenceType",
      wsdlDefinition: {
        name: "B2BMReference",
        type: "B2BMReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference element contains details of the B2B header being referred"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementB2BMReference;
Modeler.register(ElementB2BMReference, "ElementB2BMReference");
