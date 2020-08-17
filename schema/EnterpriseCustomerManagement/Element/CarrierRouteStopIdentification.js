var Modeler = require("../Modeler.js");
var className = 'ElementCarrierRouteStopIdentification';

var ElementCarrierRouteStopIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CarrierRouteStopIdentification: {
      type: "TypeCarrierRouteStopIdentificationType",
      wsdlDefinition: {
        name: "CarrierRouteStopIdentification",
        type: "CarrierRouteStopIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a carrier Route"
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
	  CarrierRouteStopIdentification: {
      type: "TypeCarrierRouteStopIdentificationType",
      wsdlDefinition: {
        name: "CarrierRouteStopIdentification",
        type: "CarrierRouteStopIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a carrier Route"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCarrierRouteStopIdentification;
Modeler.register(ElementCarrierRouteStopIdentification, "ElementCarrierRouteStopIdentification");
