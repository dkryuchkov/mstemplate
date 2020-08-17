var Modeler = require("../Modeler.js");
var className = 'ElementPositionStandardClassificationIdentification';

var ElementPositionStandardClassificationIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PositionStandardClassificationIdentification: {
      type: "TypePositionStandardClassificationIdentificationType",
      wsdlDefinition: {
        name: "PositionStandardClassificationIdentification",
        type: "PositionStandardClassificationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification to a Position Standard Classification object"
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
	  PositionStandardClassificationIdentification: {
      type: "TypePositionStandardClassificationIdentificationType",
      wsdlDefinition: {
        name: "PositionStandardClassificationIdentification",
        type: "PositionStandardClassificationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification to a Position Standard Classification object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPositionStandardClassificationIdentification;
Modeler.register(ElementPositionStandardClassificationIdentification, "ElementPositionStandardClassificationIdentification");
