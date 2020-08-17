var Modeler = require("../Modeler.js");
var className = 'ElementIdentification';

var ElementIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        name: "Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Means of identifying a component or object"
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
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        name: "Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Means of identifying a component or object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementIdentification;
Modeler.register(ElementIdentification, "ElementIdentification");
