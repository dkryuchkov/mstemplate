var Modeler = require("../Modeler.js");
var className = 'TypeCustomPerformanceReviewRatingReferenceType';

var TypeCustomPerformanceReviewRatingReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPerformanceReviewRatingReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPerformanceReviewRatingReferenceType",
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
	  CustomPerformanceReviewRatingReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPerformanceReviewRatingReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPerformanceReviewRatingReferenceType;
Modeler.register(TypeCustomPerformanceReviewRatingReferenceType, "TypeCustomPerformanceReviewRatingReferenceType");
