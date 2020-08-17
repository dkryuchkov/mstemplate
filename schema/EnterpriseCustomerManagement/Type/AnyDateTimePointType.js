var Modeler = require("../Modeler.js");
var className = 'TypeAnyDateTimePointType';

var TypeAnyDateTimePointType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AnyDateTimePointType: {
      type: "string",
      wsdlDefinition: {
        name: "AnyDateTimePointType",
        "xsd:annotation": {
          "xsd:documentation": "A flexible time point type. It allows for various time point to be specified as indicated by its precision code attribute."
        },
        "xsd:simpleContent": {
          "xsd:extension": {
            base: "AnyDateTimePointBaseType",
            "xsd:attribute": {
              name: "PrecisionCode",
              type: "AnyDateTimePointPrecisionCodeType",
              use: "optional",
              attribute: true
            }
          }
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrecisionCode: {
      type: "TypeAnyDateTimePointPrecisionCodeType",
      wsdlDefinition: {
        name: "PrecisionCode",
        type: "AnyDateTimePointPrecisionCodeType",
        use: "optional",
        attribute: true
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
	  AnyDateTimePointType: {
      type: "string",
      wsdlDefinition: {
        name: "AnyDateTimePointType",
        "xsd:annotation": {
          "xsd:documentation": "A flexible time point type. It allows for various time point to be specified as indicated by its precision code attribute."
        },
        "xsd:simpleContent": {
          "xsd:extension": {
            base: "AnyDateTimePointBaseType",
            "xsd:attribute": {
              name: "PrecisionCode",
              type: "AnyDateTimePointPrecisionCodeType",
              use: "optional",
              attribute: true
            }
          }
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrecisionCode: {
      type: "TypeAnyDateTimePointPrecisionCodeType",
      wsdlDefinition: {
        name: "PrecisionCode",
        type: "AnyDateTimePointPrecisionCodeType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAnyDateTimePointType;
Modeler.register(TypeAnyDateTimePointType, "TypeAnyDateTimePointType");
