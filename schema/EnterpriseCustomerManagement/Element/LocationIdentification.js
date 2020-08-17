var Modeler = require("../Modeler.js");
var className = 'ElementLocationIdentification';

var ElementLocationIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LocationIdentification: {
      type: "TypeLocationIdentificationType",
      wsdlDefinition: {
        name: "LocationIdentification",
        type: "LocationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Location"
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
	  LocationIdentification: {
      type: "TypeLocationIdentificationType",
      wsdlDefinition: {
        name: "LocationIdentification",
        type: "LocationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Location"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementLocationIdentification;
Modeler.register(ElementLocationIdentification, "ElementLocationIdentification");
