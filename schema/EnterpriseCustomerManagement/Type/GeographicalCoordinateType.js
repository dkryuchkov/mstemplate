var Modeler = require("../Modeler.js");
var className = 'TypeGeographicalCoordinateType';

var TypeGeographicalCoordinateType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AltitudeMeasure: {
      type: "TypeMeasureType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AltitudeMeasure",
        type: "MeasureType",
        "xsd:annotation": {
          "xsd:documentation": "The measure of the altitude that reflects the vertical elevation of an object above a surface for this geographical coordinate (Reference ISO 6709"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LatitudeMeasure: {
      type: "TypeMeasureType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LatitudeMeasure",
        type: "MeasureType",
        "xsd:annotation": {
          "xsd:documentation": "The measure of the latitude as an angular distance north or south from the Equator meridian to the meridian of a specific place for this geographical coordinate. (Reference ISO 6709)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LongitudeMeasure: {
      type: "TypeMeasureType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LongitudeMeasure",
        type: "MeasureType",
        "xsd:annotation": {
          "xsd:documentation": "The measure of the longitude as an angular distance east or west from the Greenwich meridian to the meridian of a specific place (Reference ISO 6709)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LatitudeDirectionCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LatitudeDirectionCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The indication of whether the latitude compass direction from the Equator meridian to the meridian of a specific place is North (+) or South (-).  (Reference ISO 6709)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LongitudeDirectionCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LongitudeDirectionCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The indication of whether the longitude as a compass direction from the Greenwich meridian to the meridian of a specific place is East (-) or West (+) for this geographical coordinate. (Reference ISO 6709)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SystemID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SystemID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "A unique identifier of the system used for measuring a geographical coordinate other than Global Positioning System"
        },
        attribute: false,
        ns: "WL5G3N2"
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
	  AltitudeMeasure: {
      type: "TypeMeasureType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AltitudeMeasure",
        type: "MeasureType",
        "xsd:annotation": {
          "xsd:documentation": "The measure of the altitude that reflects the vertical elevation of an object above a surface for this geographical coordinate (Reference ISO 6709"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LatitudeMeasure: {
      type: "TypeMeasureType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LatitudeMeasure",
        type: "MeasureType",
        "xsd:annotation": {
          "xsd:documentation": "The measure of the latitude as an angular distance north or south from the Equator meridian to the meridian of a specific place for this geographical coordinate. (Reference ISO 6709)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LongitudeMeasure: {
      type: "TypeMeasureType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LongitudeMeasure",
        type: "MeasureType",
        "xsd:annotation": {
          "xsd:documentation": "The measure of the longitude as an angular distance east or west from the Greenwich meridian to the meridian of a specific place (Reference ISO 6709)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LatitudeDirectionCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LatitudeDirectionCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The indication of whether the latitude compass direction from the Equator meridian to the meridian of a specific place is North (+) or South (-).  (Reference ISO 6709)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LongitudeDirectionCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LongitudeDirectionCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The indication of whether the longitude as a compass direction from the Greenwich meridian to the meridian of a specific place is East (-) or West (+) for this geographical coordinate. (Reference ISO 6709)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SystemID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SystemID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "A unique identifier of the system used for measuring a geographical coordinate other than Global Positioning System"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeGeographicalCoordinateType;
Modeler.register(TypeGeographicalCoordinateType, "TypeGeographicalCoordinateType");
