var Modeler = require("../Modeler.js");
var className = 'ElementSenderObjectIdentification';

var ElementSenderObjectIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SenderObjectIdentification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        name: "SenderObjectIdentification",
        type: "IdentificationType",
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
	  SenderObjectIdentification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        name: "SenderObjectIdentification",
        type: "IdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSenderObjectIdentification;
Modeler.register(ElementSenderObjectIdentification, "ElementSenderObjectIdentification");
