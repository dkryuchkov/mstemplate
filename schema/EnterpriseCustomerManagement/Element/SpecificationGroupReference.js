var Modeler = require("../Modeler.js");
var className = 'ElementSpecificationGroupReference';

var ElementSpecificationGroupReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SpecificationGroupReference: {
      type: "TypeSpecificationGroupReferenceType",
      wsdlDefinition: {
        name: "SpecificationGroupReference",
        type: "SpecificationGroupReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an instance of a SpecificationGroup"
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
	  SpecificationGroupReference: {
      type: "TypeSpecificationGroupReferenceType",
      wsdlDefinition: {
        name: "SpecificationGroupReference",
        type: "SpecificationGroupReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an instance of a SpecificationGroup"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSpecificationGroupReference;
Modeler.register(ElementSpecificationGroupReference, "ElementSpecificationGroupReference");
