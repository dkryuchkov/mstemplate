var Modeler = require("../Modeler.js");
var className = 'ElementBaseModelItemReference';

var ElementBaseModelItemReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BaseModelItemReference: {
      type: "TypeItemReferenceType",
      wsdlDefinition: {
        name: "BaseModelItemReference",
        type: "ItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a base model item from which other item configurations are created"
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
	  BaseModelItemReference: {
      type: "TypeItemReferenceType",
      wsdlDefinition: {
        name: "BaseModelItemReference",
        type: "ItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a base model item from which other item configurations are created"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBaseModelItemReference;
Modeler.register(ElementBaseModelItemReference, "ElementBaseModelItemReference");
