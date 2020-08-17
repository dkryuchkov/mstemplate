var Modeler = require("../Modeler.js");
var className = 'ElementWIPOperationResourceReference';

var ElementWIPOperationResourceReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WIPOperationResourceReference: {
      type: "TypeWIPOperationResourceReferenceType",
      wsdlDefinition: {
        name: "WIPOperationResourceReference",
        type: "WIPOperationResourceReferenceType",
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
	  WIPOperationResourceReference: {
      type: "TypeWIPOperationResourceReferenceType",
      wsdlDefinition: {
        name: "WIPOperationResourceReference",
        type: "WIPOperationResourceReferenceType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWIPOperationResourceReference;
Modeler.register(ElementWIPOperationResourceReference, "ElementWIPOperationResourceReference");
