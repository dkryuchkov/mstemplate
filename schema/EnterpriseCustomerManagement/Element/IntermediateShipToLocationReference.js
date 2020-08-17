var Modeler = require("../Modeler.js");
var className = 'ElementIntermediateShipToLocationReference';

var ElementIntermediateShipToLocationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  IntermediateShipToLocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        name: "IntermediateShipToLocationReference",
        type: "LocationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The intermediate location to which the goods are shipped. This is an intermediate location before reaching the final destination"
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
	  IntermediateShipToLocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        name: "IntermediateShipToLocationReference",
        type: "LocationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The intermediate location to which the goods are shipped. This is an intermediate location before reaching the final destination"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementIntermediateShipToLocationReference;
Modeler.register(ElementIntermediateShipToLocationReference, "ElementIntermediateShipToLocationReference");
