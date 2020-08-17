var Modeler = require("../Modeler.js");
var className = 'TypeMarketingTreatmentReferenceType';

var TypeMarketingTreatmentReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MarketingTreatmentIdentification: {
      type: "TypeMarketingTreatmentIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MarketingTreatmentIdentification",
        type: "MarketingTreatmentIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomMarketingTreatmentReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomMarketingTreatmentReferenceType",
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
	  MarketingTreatmentIdentification: {
      type: "TypeMarketingTreatmentIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MarketingTreatmentIdentification",
        type: "MarketingTreatmentIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomMarketingTreatmentReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomMarketingTreatmentReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeMarketingTreatmentReferenceType;
Modeler.register(TypeMarketingTreatmentReferenceType, "TypeMarketingTreatmentReferenceType");
