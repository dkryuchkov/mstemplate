var Modeler = require("../Modeler.js");
var className = 'ElementPerformanceReviewRatingReference';

var ElementPerformanceReviewRatingReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PerformanceReviewRatingReference: {
      type: "TypePerformanceReviewRatingReferenceType",
      wsdlDefinition: {
        name: "PerformanceReviewRatingReference",
        type: "PerformanceReviewRatingReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a performance review rating (a particular rating value) within a performance review rating model"
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
	  PerformanceReviewRatingReference: {
      type: "TypePerformanceReviewRatingReferenceType",
      wsdlDefinition: {
        name: "PerformanceReviewRatingReference",
        type: "PerformanceReviewRatingReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a performance review rating (a particular rating value) within a performance review rating model"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPerformanceReviewRatingReference;
Modeler.register(ElementPerformanceReviewRatingReference, "ElementPerformanceReviewRatingReference");
