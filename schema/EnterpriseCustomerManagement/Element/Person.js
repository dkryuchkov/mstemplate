var Modeler = require("../Modeler.js");
var className = 'ElementPerson';

var ElementPerson = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Person: {
      type: "TypePersonType",
      wsdlDefinition: {
        name: "Person",
        type: "PersonType",
        "xsd:annotation": {
          "xsd:documentation": "An individual"
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
	  Person: {
      type: "TypePersonType",
      wsdlDefinition: {
        name: "Person",
        type: "PersonType",
        "xsd:annotation": {
          "xsd:documentation": "An individual"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPerson;
Modeler.register(ElementPerson, "ElementPerson");
