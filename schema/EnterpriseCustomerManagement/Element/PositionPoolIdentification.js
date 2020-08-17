var Modeler = require("../Modeler.js");
var className = 'ElementPositionPoolIdentification';

var ElementPositionPoolIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PositionPoolIdentification: {
      type: "TypePositionPoolIdentificationType",
      wsdlDefinition: {
        name: "PositionPoolIdentification",
        type: "PositionPoolIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Position Pool object"
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
	  PositionPoolIdentification: {
      type: "TypePositionPoolIdentificationType",
      wsdlDefinition: {
        name: "PositionPoolIdentification",
        type: "PositionPoolIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Position Pool object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPositionPoolIdentification;
Modeler.register(ElementPositionPoolIdentification, "ElementPositionPoolIdentification");
