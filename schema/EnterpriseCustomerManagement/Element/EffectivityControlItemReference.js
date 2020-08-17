var Modeler = require("../Modeler.js");
var className = 'ElementEffectivityControlItemReference';

var ElementEffectivityControlItemReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EffectivityControlItemReference: {
      type: "TypeItemReferenceType",
      wsdlDefinition: {
        name: "EffectivityControlItemReference",
        type: "ItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an item used to determine effectivity of an Engineering Change Order"
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
	  EffectivityControlItemReference: {
      type: "TypeItemReferenceType",
      wsdlDefinition: {
        name: "EffectivityControlItemReference",
        type: "ItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an item used to determine effectivity of an Engineering Change Order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEffectivityControlItemReference;
Modeler.register(ElementEffectivityControlItemReference, "ElementEffectivityControlItemReference");
