var Modeler = require("../Modeler.js");
var className = 'ElementSecondaryPriceListReference';

var ElementSecondaryPriceListReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SecondaryPriceListReference: {
      type: "TypePriceListReferenceType",
      wsdlDefinition: {
        name: "SecondaryPriceListReference",
        type: "PriceListReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Secondary Price List."
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
	  SecondaryPriceListReference: {
      type: "TypePriceListReferenceType",
      wsdlDefinition: {
        name: "SecondaryPriceListReference",
        type: "PriceListReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Secondary Price List."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSecondaryPriceListReference;
Modeler.register(ElementSecondaryPriceListReference, "ElementSecondaryPriceListReference");
