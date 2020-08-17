var Modeler = require("../Modeler.js");
var className = 'ElementOwnerPersonReference';

var ElementOwnerPersonReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OwnerPersonReference: {
      type: "TypePersonReferenceType",
      wsdlDefinition: {
        name: "OwnerPersonReference",
        type: "PersonReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a person who is an owner of the containing object"
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
	  OwnerPersonReference: {
      type: "TypePersonReferenceType",
      wsdlDefinition: {
        name: "OwnerPersonReference",
        type: "PersonReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a person who is an owner of the containing object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOwnerPersonReference;
Modeler.register(ElementOwnerPersonReference, "ElementOwnerPersonReference");
