var Modeler = require("../Modeler.js");
var className = 'ElementPersonReference';

var ElementPersonReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PersonReference: {
      type: "TypePersonReferenceType",
      wsdlDefinition: {
        name: "PersonReference",
        type: "PersonReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a person"
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
	  PersonReference: {
      type: "TypePersonReferenceType",
      wsdlDefinition: {
        name: "PersonReference",
        type: "PersonReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a person"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPersonReference;
Modeler.register(ElementPersonReference, "ElementPersonReference");
