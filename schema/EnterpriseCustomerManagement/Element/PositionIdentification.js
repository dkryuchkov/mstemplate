var Modeler = require("../Modeler.js");
var className = 'ElementPositionIdentification';

var ElementPositionIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PositionIdentification: {
      type: "TypePositionIdentificationType",
      wsdlDefinition: {
        name: "PositionIdentification",
        type: "PositionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies a position"
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
	  PositionIdentification: {
      type: "TypePositionIdentificationType",
      wsdlDefinition: {
        name: "PositionIdentification",
        type: "PositionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies a position"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPositionIdentification;
Modeler.register(ElementPositionIdentification, "ElementPositionIdentification");
