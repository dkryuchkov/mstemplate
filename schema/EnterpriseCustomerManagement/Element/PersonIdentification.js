var Modeler = require("../Modeler.js");
var className = 'ElementPersonIdentification';

var ElementPersonIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PersonIdentification: {
      type: "TypePersonIdentificationType",
      wsdlDefinition: {
        name: "PersonIdentification",
        type: "PersonIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Person object"
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
	  PersonIdentification: {
      type: "TypePersonIdentificationType",
      wsdlDefinition: {
        name: "PersonIdentification",
        type: "PersonIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Person object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPersonIdentification;
Modeler.register(ElementPersonIdentification, "ElementPersonIdentification");
