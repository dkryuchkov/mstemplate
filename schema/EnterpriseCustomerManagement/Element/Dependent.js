var Modeler = require("../Modeler.js");
var className = 'ElementDependent';

var ElementDependent = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Dependent: {
      type: "TypeDependentType",
      wsdlDefinition: {
        name: "Dependent",
        type: "DependentType",
        "xsd:annotation": {
          "xsd:documentation": "This component represents information about a dependent of party."
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
	  Dependent: {
      type: "TypeDependentType",
      wsdlDefinition: {
        name: "Dependent",
        type: "DependentType",
        "xsd:annotation": {
          "xsd:documentation": "This component represents information about a dependent of party."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDependent;
Modeler.register(ElementDependent, "ElementDependent");
