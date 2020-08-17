var Modeler = require("../Modeler.js");
var className = 'ElementObjectCrossReference';

var ElementObjectCrossReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ObjectCrossReference: {
      type: "TypeObjectCrossReferenceType",
      wsdlDefinition: {
        name: "ObjectCrossReference",
        type: "ObjectCrossReferenceType",
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
	  ObjectCrossReference: {
      type: "TypeObjectCrossReferenceType",
      wsdlDefinition: {
        name: "ObjectCrossReference",
        type: "ObjectCrossReferenceType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementObjectCrossReference;
Modeler.register(ElementObjectCrossReference, "ElementObjectCrossReference");
