var Modeler = require("../Modeler.js");
var className = 'ElementObjectIdentification';

var ElementObjectIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ObjectIdentification: {
      type: "TypeObjectIdentificationType",
      wsdlDefinition: {
        name: "ObjectIdentification",
        type: "ObjectIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an object"
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
	  ObjectIdentification: {
      type: "TypeObjectIdentificationType",
      wsdlDefinition: {
        name: "ObjectIdentification",
        type: "ObjectIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementObjectIdentification;
Modeler.register(ElementObjectIdentification, "ElementObjectIdentification");
