var Modeler = require("../Modeler.js");
var className = 'TypeQuantityType';

var TypeQuantityType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QuantityType: {
      type: "string",
      wsdlDefinition: {
        name: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "A counted number of non-monetary units possibly including fractions"
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
	  QuantityType: {
      type: "string",
      wsdlDefinition: {
        name: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "A counted number of non-monetary units possibly including fractions"
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

module.exports = TypeQuantityType;
Modeler.register(TypeQuantityType, "TypeQuantityType");
