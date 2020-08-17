var Modeler = require("../Modeler.js");
var className = 'ElementGeographicalCoordinate';

var ElementGeographicalCoordinate = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  GeographicalCoordinate: {
      type: "TypeGeographicalCoordinateType",
      wsdlDefinition: {
        name: "GeographicalCoordinate",
        type: "GeographicalCoordinateType",
        "xsd:annotation": {
          "xsd:documentation": "The latitude and longitude of a place, by which its relative situation on the globe is known. The height above the sea level constitutes a third coordinate"
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
	  GeographicalCoordinate: {
      type: "TypeGeographicalCoordinateType",
      wsdlDefinition: {
        name: "GeographicalCoordinate",
        type: "GeographicalCoordinateType",
        "xsd:annotation": {
          "xsd:documentation": "The latitude and longitude of a place, by which its relative situation on the globe is known. The height above the sea level constitutes a third coordinate"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementGeographicalCoordinate;
Modeler.register(ElementGeographicalCoordinate, "ElementGeographicalCoordinate");
