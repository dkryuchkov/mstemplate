var Modeler = require("../Modeler.js");
var className = 'TypePerformanceReviewRatingReferenceType';

var TypePerformanceReviewRatingReferenceType = function(json, parentObj) {
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
    PerformanceReviewRatingIdentification: {
      type: "TypePerformanceReviewRatingIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PerformanceReviewRatingIdentification",
        type: "PerformanceReviewRatingIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPerformanceReviewRatingReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPerformanceReviewRatingReferenceType",
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
    PerformanceReviewRatingIdentification: {
      type: "TypePerformanceReviewRatingIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PerformanceReviewRatingIdentification",
        type: "PerformanceReviewRatingIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPerformanceReviewRatingReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPerformanceReviewRatingReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePerformanceReviewRatingReferenceType;
Modeler.register(TypePerformanceReviewRatingReferenceType, "TypePerformanceReviewRatingReferenceType");
