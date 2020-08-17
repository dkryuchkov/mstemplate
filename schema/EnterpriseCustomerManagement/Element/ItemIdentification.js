var Modeler = require("../Modeler.js");
var className = 'ElementItemIdentification';

var ElementItemIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemIdentification: {
      type: "TypeItemIdentificationType",
      wsdlDefinition: {
        name: "ItemIdentification",
        type: "ItemIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Item"
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
	  ItemIdentification: {
      type: "TypeItemIdentificationType",
      wsdlDefinition: {
        name: "ItemIdentification",
        type: "ItemIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Item"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemIdentification;
Modeler.register(ElementItemIdentification, "ElementItemIdentification");
