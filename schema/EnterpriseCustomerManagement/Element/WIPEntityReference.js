var Modeler = require("../Modeler.js");
var className = 'ElementWIPEntityReference';

var ElementWIPEntityReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WIPEntityReference: {
      type: "TypeWIPEntityReferenceType",
      wsdlDefinition: {
        name: "WIPEntityReference",
        type: "WIPEntityReferenceType",
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
	  WIPEntityReference: {
      type: "TypeWIPEntityReferenceType",
      wsdlDefinition: {
        name: "WIPEntityReference",
        type: "WIPEntityReferenceType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWIPEntityReference;
Modeler.register(ElementWIPEntityReference, "ElementWIPEntityReference");
