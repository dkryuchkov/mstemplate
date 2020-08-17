var Modeler = require("../Modeler.js");
var className = 'ElementResourceReference';

var ElementResourceReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ResourceReference: {
      type: "TypeResourceReferenceType",
      wsdlDefinition: {
        name: "ResourceReference",
        type: "ResourceReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the Resource. A resource can be an employee, organization, supplier, carrier etc."
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
	  ResourceReference: {
      type: "TypeResourceReferenceType",
      wsdlDefinition: {
        name: "ResourceReference",
        type: "ResourceReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the Resource. A resource can be an employee, organization, supplier, carrier etc."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementResourceReference;
Modeler.register(ElementResourceReference, "ElementResourceReference");
