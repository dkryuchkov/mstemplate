var Modeler = require("../Modeler.js");
var className = 'ElementTemplateItemReference';

var ElementTemplateItemReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TemplateItemReference: {
      type: "TypeItemReferenceType",
      wsdlDefinition: {
        name: "TemplateItemReference",
        type: "ItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an item that serves as a template for creating other items"
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
	  TemplateItemReference: {
      type: "TypeItemReferenceType",
      wsdlDefinition: {
        name: "TemplateItemReference",
        type: "ItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an item that serves as a template for creating other items"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTemplateItemReference;
Modeler.register(ElementTemplateItemReference, "ElementTemplateItemReference");
