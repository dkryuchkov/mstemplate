var Modeler = require("../Modeler.js");
var className = 'ElementPerformanceReviewRatingModelReference';

var ElementPerformanceReviewRatingModelReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PerformanceReviewRatingModelReference: {
      type: "TypePerformanceReviewRatingModelReferenceType",
      wsdlDefinition: {
        name: "PerformanceReviewRatingModelReference",
        type: "PerformanceReviewRatingModelReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a performance review rating model which defines possible values for a particular kind of rating"
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
	  PerformanceReviewRatingModelReference: {
      type: "TypePerformanceReviewRatingModelReferenceType",
      wsdlDefinition: {
        name: "PerformanceReviewRatingModelReference",
        type: "PerformanceReviewRatingModelReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a performance review rating model which defines possible values for a particular kind of rating"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPerformanceReviewRatingModelReference;
Modeler.register(ElementPerformanceReviewRatingModelReference, "ElementPerformanceReviewRatingModelReference");
