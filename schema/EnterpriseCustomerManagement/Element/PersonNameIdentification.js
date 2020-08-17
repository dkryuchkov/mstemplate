var Modeler = require("../Modeler.js");
var className = 'ElementPersonNameIdentification';

var ElementPersonNameIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PersonNameIdentification: {
      type: "TypePersonNameIdentificationType",
      wsdlDefinition: {
        name: "PersonNameIdentification",
        type: "PersonNameIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification to a PersonName of a Person."
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
	  PersonNameIdentification: {
      type: "TypePersonNameIdentificationType",
      wsdlDefinition: {
        name: "PersonNameIdentification",
        type: "PersonNameIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification to a PersonName of a Person."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPersonNameIdentification;
Modeler.register(ElementPersonNameIdentification, "ElementPersonNameIdentification");
