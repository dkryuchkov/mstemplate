var Modeler = require("../Modeler.js");
var className = 'ElementItineraryIdentification';

var ElementItineraryIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItineraryIdentification: {
      type: "TypeItineraryIdentificationType",
      wsdlDefinition: {
        name: "ItineraryIdentification",
        type: "ItineraryIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an Itinerary"
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
	  ItineraryIdentification: {
      type: "TypeItineraryIdentificationType",
      wsdlDefinition: {
        name: "ItineraryIdentification",
        type: "ItineraryIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an Itinerary"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItineraryIdentification;
Modeler.register(ElementItineraryIdentification, "ElementItineraryIdentification");
