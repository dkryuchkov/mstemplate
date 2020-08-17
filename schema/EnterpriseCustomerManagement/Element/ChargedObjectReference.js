var Modeler = require("../Modeler.js");
var className = 'ElementChargedObjectReference';

var ElementChargedObjectReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ChargedObjectReference: {
      type: "TypeObjectReferenceType",
      wsdlDefinition: {
        name: "ChargedObjectReference",
        type: "ObjectReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an object to which an expense is associated. For example, charged object of an expense may be a particular project, service request, asset, etc."
        },
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
	  ChargedObjectReference: {
      type: "TypeObjectReferenceType",
      wsdlDefinition: {
        name: "ChargedObjectReference",
        type: "ObjectReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an object to which an expense is associated. For example, charged object of an expense may be a particular project, service request, asset, etc."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementChargedObjectReference;
Modeler.register(ElementChargedObjectReference, "ElementChargedObjectReference");
