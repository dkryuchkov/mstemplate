var Modeler = require("../Modeler.js");
var className = 'TypeCustomCreditScoreCommentaryType';

var TypeCustomCreditScoreCommentaryType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCreditScoreCommentaryType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCreditScoreCommentaryType",
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
	  CustomCreditScoreCommentaryType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCreditScoreCommentaryType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCreditScoreCommentaryType;
Modeler.register(TypeCustomCreditScoreCommentaryType, "TypeCustomCreditScoreCommentaryType");
