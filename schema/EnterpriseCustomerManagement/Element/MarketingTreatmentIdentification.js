var Modeler = require("../Modeler.js");
var className = 'ElementMarketingTreatmentIdentification';

var ElementMarketingTreatmentIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MarketingTreatmentIdentification: {
      type: "TypeMarketingTreatmentIdentificationType",
      wsdlDefinition: {
        name: "MarketingTreatmentIdentification",
        type: "MarketingTreatmentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Marketing Treatment object"
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
	  MarketingTreatmentIdentification: {
      type: "TypeMarketingTreatmentIdentificationType",
      wsdlDefinition: {
        name: "MarketingTreatmentIdentification",
        type: "MarketingTreatmentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Marketing Treatment object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementMarketingTreatmentIdentification;
Modeler.register(ElementMarketingTreatmentIdentification, "ElementMarketingTreatmentIdentification");
