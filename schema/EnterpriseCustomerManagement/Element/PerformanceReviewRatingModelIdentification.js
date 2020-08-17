var Modeler = require("../Modeler.js");
var className = 'ElementPerformanceReviewRatingModelIdentification';

var ElementPerformanceReviewRatingModelIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PerformanceReviewRatingModelIdentification: {
      type: "TypePerformanceReviewRatingModelIdentificationType",
      wsdlDefinition: {
        name: "PerformanceReviewRatingModelIdentification",
        type: "PerformanceReviewRatingModelIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Performance Review Rating Model"
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
	  PerformanceReviewRatingModelIdentification: {
      type: "TypePerformanceReviewRatingModelIdentificationType",
      wsdlDefinition: {
        name: "PerformanceReviewRatingModelIdentification",
        type: "PerformanceReviewRatingModelIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Performance Review Rating Model"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPerformanceReviewRatingModelIdentification;
Modeler.register(ElementPerformanceReviewRatingModelIdentification, "ElementPerformanceReviewRatingModelIdentification");
