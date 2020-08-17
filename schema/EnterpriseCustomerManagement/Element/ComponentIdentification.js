var Modeler = require("../Modeler.js");
var className = 'ElementComponentIdentification';

var ElementComponentIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ComponentIdentification: {
      type: "TypeComponentIdentificationType",
      wsdlDefinition: {
        name: "ComponentIdentification",
        type: "ComponentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "An identification pointing to business component of a business object. This identification is typically used with the ObjectIdentification."
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
	  ComponentIdentification: {
      type: "TypeComponentIdentificationType",
      wsdlDefinition: {
        name: "ComponentIdentification",
        type: "ComponentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "An identification pointing to business component of a business object. This identification is typically used with the ObjectIdentification."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementComponentIdentification;
Modeler.register(ElementComponentIdentification, "ElementComponentIdentification");
