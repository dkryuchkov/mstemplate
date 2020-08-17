var Modeler = require("../Modeler.js");
var className = 'ElementValueSetReference';

var ElementValueSetReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ValueSetReference: {
      type: "TypeValueSetReferenceType",
      wsdlDefinition: {
        name: "ValueSetReference",
        type: "ValueSetReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A reference to a Value Set."
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
	  ValueSetReference: {
      type: "TypeValueSetReferenceType",
      wsdlDefinition: {
        name: "ValueSetReference",
        type: "ValueSetReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A reference to a Value Set."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementValueSetReference;
Modeler.register(ElementValueSetReference, "ElementValueSetReference");
