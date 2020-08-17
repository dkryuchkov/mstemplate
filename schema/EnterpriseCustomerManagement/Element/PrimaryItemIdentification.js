var Modeler = require("../Modeler.js");
var className = 'ElementPrimaryItemIdentification';

var ElementPrimaryItemIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PrimaryItemIdentification: {
      type: "TypeItemIdentificationType",
      wsdlDefinition: {
        name: "PrimaryItemIdentification",
        type: "ItemIdentificationType",
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
	  PrimaryItemIdentification: {
      type: "TypeItemIdentificationType",
      wsdlDefinition: {
        name: "PrimaryItemIdentification",
        type: "ItemIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPrimaryItemIdentification;
Modeler.register(ElementPrimaryItemIdentification, "ElementPrimaryItemIdentification");
