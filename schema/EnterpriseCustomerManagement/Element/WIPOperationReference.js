var Modeler = require("../Modeler.js");
var className = 'ElementWIPOperationReference';

var ElementWIPOperationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WIPOperationReference: {
      type: "TypeWIPOperationReferenceType",
      wsdlDefinition: {
        name: "WIPOperationReference",
        type: "WIPOperationReferenceType",
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
	  WIPOperationReference: {
      type: "TypeWIPOperationReferenceType",
      wsdlDefinition: {
        name: "WIPOperationReference",
        type: "WIPOperationReferenceType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWIPOperationReference;
Modeler.register(ElementWIPOperationReference, "ElementWIPOperationReference");
