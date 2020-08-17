var Modeler = require("../Modeler.js");
var className = 'ElementMarketingTreatmentReference';

var ElementMarketingTreatmentReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MarketingTreatmentReference: {
      type: "TypeMarketingTreatmentReferenceType",
      wsdlDefinition: {
        name: "MarketingTreatmentReference",
        type: "MarketingTreatmentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Marketing Treatment. A Marketing Treatment is a component for managing information about delivery of marketing materials to customers."
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
	  MarketingTreatmentReference: {
      type: "TypeMarketingTreatmentReferenceType",
      wsdlDefinition: {
        name: "MarketingTreatmentReference",
        type: "MarketingTreatmentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Marketing Treatment. A Marketing Treatment is a component for managing information about delivery of marketing materials to customers."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementMarketingTreatmentReference;
Modeler.register(ElementMarketingTreatmentReference, "ElementMarketingTreatmentReference");
