var Modeler = require("../Modeler.js");
var className = 'TypeRateType';

var TypeRateType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RateType: {
      type: "string",
      wsdlDefinition: {
        name: "RateType",
        "xsd:annotation": {
          "xsd:documentation": "Numeric information that is assigned or is determined by calculation, counting, or sequencing. It does not require a unit of quantity or unit of measure"
        },
        "xsd:simpleContent": {
          "xsd:extension": {
            base: "xsd:decimal",
            "xsd:attribute": [
              {
                name: "unitCode",
                type: "xsd:normalizedString",
                use: "optional",
                attribute: true
              },
              {
                name: "baseValue",
                type: "xsd:decimal",
                use: "optional",
                attribute: true
              },
              {
                name: "baseUnitCode",
                type: "xsd:normalizedString",
                use: "optional",
                attribute: true
              }
            ]
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
    },
    baseValue: {
      type: "number",
      wsdlDefinition: {
        name: "baseValue",
        type: "xsd:decimal",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    baseUnitCode: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "baseUnitCode",
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
	  RateType: {
      type: "string",
      wsdlDefinition: {
        name: "RateType",
        "xsd:annotation": {
          "xsd:documentation": "Numeric information that is assigned or is determined by calculation, counting, or sequencing. It does not require a unit of quantity or unit of measure"
        },
        "xsd:simpleContent": {
          "xsd:extension": {
            base: "xsd:decimal",
            "xsd:attribute": [
              {
                name: "unitCode",
                type: "xsd:normalizedString",
                use: "optional",
                attribute: true
              },
              {
                name: "baseValue",
                type: "xsd:decimal",
                use: "optional",
                attribute: true
              },
              {
                name: "baseUnitCode",
                type: "xsd:normalizedString",
                use: "optional",
                attribute: true
              }
            ]
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
    },
    baseValue: {
      type: "number",
      wsdlDefinition: {
        name: "baseValue",
        type: "xsd:decimal",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    baseUnitCode: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "baseUnitCode",
        type: "xsd:normalizedString",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRateType;
Modeler.register(TypeRateType, "TypeRateType");
