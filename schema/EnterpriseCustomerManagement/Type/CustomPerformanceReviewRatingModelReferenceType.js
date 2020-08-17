var Modeler = require("../Modeler.js");
var className = 'TypeCustomPerformanceReviewRatingModelReferenceType';

var TypeCustomPerformanceReviewRatingModelReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPerformanceReviewRatingModelReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPerformanceReviewRatingModelReferenceType",
        attribute: false,
        type: "xsd:string"
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
	  CustomPerformanceReviewRatingModelReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPerformanceReviewRatingModelReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPerformanceReviewRatingModelReferenceType;
Modeler.register(TypeCustomPerformanceReviewRatingModelReferenceType, "TypeCustomPerformanceReviewRatingModelReferenceType");
