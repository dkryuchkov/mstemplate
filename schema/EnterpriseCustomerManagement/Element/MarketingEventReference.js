var Modeler = require("../Modeler.js");
var className = 'ElementMarketingEventReference';

var ElementMarketingEventReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MarketingEventReference: {
      type: "TypeMarketingEventReferenceType",
      wsdlDefinition: {
        name: "MarketingEventReference",
        type: "MarketingEventReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Marketing Event."
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
	  MarketingEventReference: {
      type: "TypeMarketingEventReferenceType",
      wsdlDefinition: {
        name: "MarketingEventReference",
        type: "MarketingEventReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Marketing Event."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementMarketingEventReference;
Modeler.register(ElementMarketingEventReference, "ElementMarketingEventReference");
