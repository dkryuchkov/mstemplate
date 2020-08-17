var Modeler = require("../Modeler.js");
var className = 'ElementContainerIdentification';

var ElementContainerIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ContainerIdentification: {
      type: "TypeContainerIdentificationType",
      wsdlDefinition: {
        name: "ContainerIdentification",
        type: "ContainerIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Container"
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
	  ContainerIdentification: {
      type: "TypeContainerIdentificationType",
      wsdlDefinition: {
        name: "ContainerIdentification",
        type: "ContainerIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Container"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementContainerIdentification;
Modeler.register(ElementContainerIdentification, "ElementContainerIdentification");
