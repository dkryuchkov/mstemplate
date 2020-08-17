var Modeler = require("../Modeler.js");
var className = 'ElementResourceIdentification';

var ElementResourceIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ResourceIdentification: {
      type: "TypeResourceIdentificationType",
      wsdlDefinition: {
        name: "ResourceIdentification",
        type: "ResourceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Resource"
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
	  ResourceIdentification: {
      type: "TypeResourceIdentificationType",
      wsdlDefinition: {
        name: "ResourceIdentification",
        type: "ResourceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Resource"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementResourceIdentification;
Modeler.register(ElementResourceIdentification, "ElementResourceIdentification");
