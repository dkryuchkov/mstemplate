var Modeler = require("../Modeler.js");
var className = 'ElementComponentItem';

var ElementComponentItem = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ComponentItem: {
      type: "TypeComponentItemType",
      wsdlDefinition: {
        name: "ComponentItem",
        type: "ComponentItemType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the component items that make up the item structure"
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
	  ComponentItem: {
      type: "TypeComponentItemType",
      wsdlDefinition: {
        name: "ComponentItem",
        type: "ComponentItemType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the component items that make up the item structure"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementComponentItem;
Modeler.register(ElementComponentItem, "ElementComponentItem");
