var Modeler = require("../Modeler.js");
var className = 'ElementPerformanceReviewRatingIdentification';

var ElementPerformanceReviewRatingIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PerformanceReviewRatingIdentification: {
      type: "TypePerformanceReviewRatingIdentificationType",
      wsdlDefinition: {
        name: "PerformanceReviewRatingIdentification",
        type: "PerformanceReviewRatingIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a rating in the Performance Review Rating Model"
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
	  PerformanceReviewRatingIdentification: {
      type: "TypePerformanceReviewRatingIdentificationType",
      wsdlDefinition: {
        name: "PerformanceReviewRatingIdentification",
        type: "PerformanceReviewRatingIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a rating in the Performance Review Rating Model"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPerformanceReviewRatingIdentification;
Modeler.register(ElementPerformanceReviewRatingIdentification, "ElementPerformanceReviewRatingIdentification");
