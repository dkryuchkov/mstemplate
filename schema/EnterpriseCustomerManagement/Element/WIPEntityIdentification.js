var Modeler = require("../Modeler.js");
var className = 'ElementWIPEntityIdentification';

var ElementWIPEntityIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WIPEntityIdentification: {
      type: "TypeWIPEntityIdentificationType",
      wsdlDefinition: {
        name: "WIPEntityIdentification",
        type: "WIPEntityIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a WIP Entity"
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
	  WIPEntityIdentification: {
      type: "TypeWIPEntityIdentificationType",
      wsdlDefinition: {
        name: "WIPEntityIdentification",
        type: "WIPEntityIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a WIP Entity"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWIPEntityIdentification;
Modeler.register(ElementWIPEntityIdentification, "ElementWIPEntityIdentification");
