var Modeler = require("../Modeler.js");
var className = 'ElementOverrideComponentItemIdentification';

var ElementOverrideComponentItemIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OverrideComponentItemIdentification: {
      type: "TypeItemIdentificationType",
      wsdlDefinition: {
        name: "OverrideComponentItemIdentification",
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
	  OverrideComponentItemIdentification: {
      type: "TypeItemIdentificationType",
      wsdlDefinition: {
        name: "OverrideComponentItemIdentification",
        type: "ItemIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOverrideComponentItemIdentification;
Modeler.register(ElementOverrideComponentItemIdentification, "ElementOverrideComponentItemIdentification");
