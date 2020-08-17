var Modeler = require("../Modeler.js");
var className = 'TypeMeasureType';

var TypeMeasureType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MeasureType: {
      type: "string",
      wsdlDefinition: {
        name: "MeasureType",
        "xsd:annotation": {
          "xsd:documentation": "A numeric value determined by measuring an object along with the specified unit of measure"
        },
        "xsd:simpleContent": {
          "xsd:extension": {
            base: "xsd:decimal",
            "xsd:attribute": {
              name: "unitCode",
              type: "xsd:normalizedString",
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
    unitCode: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "unitCode",
        type: "xsd:normalizedString",
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
	  MeasureType: {
      type: "string",
      wsdlDefinition: {
        name: "MeasureType",
        "xsd:annotation": {
          "xsd:documentation": "A numeric value determined by measuring an object along with the specified unit of measure"
        },
        "xsd:simpleContent": {
          "xsd:extension": {
            base: "xsd:decimal",
            "xsd:attribute": {
              name: "unitCode",
              type: "xsd:normalizedString",
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
    unitCode: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "unitCode",
        type: "xsd:normalizedString",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeMeasureType;
Modeler.register(TypeMeasureType, "TypeMeasureType");
