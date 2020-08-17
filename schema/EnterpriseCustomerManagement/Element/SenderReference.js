var Modeler = require("../Modeler.js");
var className = 'ElementSenderReference';

var ElementSenderReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SenderReference: {
      type: "TypeSenderReferenceType",
      wsdlDefinition: {
        name: "SenderReference",
        type: "SenderReferenceType",
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
	  SenderReference: {
      type: "TypeSenderReferenceType",
      wsdlDefinition: {
        name: "SenderReference",
        type: "SenderReferenceType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSenderReference;
Modeler.register(ElementSenderReference, "ElementSenderReference");
