var Modeler = require("../Modeler.js");
var className = 'ElementRelatedItemReference';

var ElementRelatedItemReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RelatedItemReference: {
      type: "TypeItemReferenceType",
      wsdlDefinition: {
        name: "RelatedItemReference",
        type: "ItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a related item. Used in conjunction with a relationship type to identify a set of related items"
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
	  RelatedItemReference: {
      type: "TypeItemReferenceType",
      wsdlDefinition: {
        name: "RelatedItemReference",
        type: "ItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a related item. Used in conjunction with a relationship type to identify a set of related items"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRelatedItemReference;
Modeler.register(ElementRelatedItemReference, "ElementRelatedItemReference");
