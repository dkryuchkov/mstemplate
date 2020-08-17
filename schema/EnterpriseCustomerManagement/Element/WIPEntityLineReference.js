var Modeler = require("../Modeler.js");
var className = 'ElementWIPEntityLineReference';

var ElementWIPEntityLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WIPEntityLineReference: {
      type: "TypeWIPEntityLineReferenceType",
      wsdlDefinition: {
        name: "WIPEntityLineReference",
        type: "WIPEntityLineReferenceType",
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
	  WIPEntityLineReference: {
      type: "TypeWIPEntityLineReferenceType",
      wsdlDefinition: {
        name: "WIPEntityLineReference",
        type: "WIPEntityLineReferenceType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWIPEntityLineReference;
Modeler.register(ElementWIPEntityLineReference, "ElementWIPEntityLineReference");
