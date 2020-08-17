var Modeler = require("../Modeler.js");
var className = 'ElementEBMReference';

var ElementEBMReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EBMReference: {
      type: "TypeEBMReferenceType",
      wsdlDefinition: {
        name: "EBMReference",
        type: "EBMReferenceType",
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
	  EBMReference: {
      type: "TypeEBMReferenceType",
      wsdlDefinition: {
        name: "EBMReference",
        type: "EBMReferenceType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEBMReference;
Modeler.register(ElementEBMReference, "ElementEBMReference");
