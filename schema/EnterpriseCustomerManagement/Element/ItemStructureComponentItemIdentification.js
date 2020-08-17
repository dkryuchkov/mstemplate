var Modeler = require("../Modeler.js");
var className = 'ElementItemStructureComponentItemIdentification';

var ElementItemStructureComponentItemIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemStructureComponentItemIdentification: {
      type: "TypeItemStructureComponentItemIdentificationType",
      wsdlDefinition: {
        name: "ItemStructureComponentItemIdentification",
        type: "ItemStructureComponentItemIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Item Structure Component Item"
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
	  ItemStructureComponentItemIdentification: {
      type: "TypeItemStructureComponentItemIdentificationType",
      wsdlDefinition: {
        name: "ItemStructureComponentItemIdentification",
        type: "ItemStructureComponentItemIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Item Structure Component Item"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemStructureComponentItemIdentification;
Modeler.register(ElementItemStructureComponentItemIdentification, "ElementItemStructureComponentItemIdentification");
