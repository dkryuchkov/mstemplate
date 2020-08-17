var Modeler = require("../Modeler.js");
var className = 'TypeAmountType';

var TypeAmountType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AmountType: {
      type: "string",
      wsdlDefinition: {
        name: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "A number of monetary units specified in a currency where the unit of the currency is explicit or implied"
        },
        "xsd:simpleContent": {
          "xsd:extension": {
            base: "xsd:decimal",
            "xsd:attribute": {
              name: "currencyCode",
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
    currencyCode: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "currencyCode",
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
	  AmountType: {
      type: "string",
      wsdlDefinition: {
        name: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "A number of monetary units specified in a currency where the unit of the currency is explicit or implied"
        },
        "xsd:simpleContent": {
          "xsd:extension": {
            base: "xsd:decimal",
            "xsd:attribute": {
              name: "currencyCode",
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
    currencyCode: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "currencyCode",
        type: "xsd:normalizedString",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAmountType;
Modeler.register(TypeAmountType, "TypeAmountType");
