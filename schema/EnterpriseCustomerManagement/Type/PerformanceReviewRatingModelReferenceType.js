var Modeler = require("../Modeler.js");
var className = 'TypePerformanceReviewRatingModelReferenceType';

var TypePerformanceReviewRatingModelReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PerformanceReviewRatingModelIdentification: {
      type: "TypePerformanceReviewRatingModelIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PerformanceReviewRatingModelIdentification",
        type: "PerformanceReviewRatingModelIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPerformanceReviewRatingModelReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPerformanceReviewRatingModelReferenceType",
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
	  PerformanceReviewRatingModelIdentification: {
      type: "TypePerformanceReviewRatingModelIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PerformanceReviewRatingModelIdentification",
        type: "PerformanceReviewRatingModelIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPerformanceReviewRatingModelReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPerformanceReviewRatingModelReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePerformanceReviewRatingModelReferenceType;
Modeler.register(TypePerformanceReviewRatingModelReferenceType, "TypePerformanceReviewRatingModelReferenceType");
