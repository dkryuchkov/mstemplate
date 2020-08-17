var Modeler = require("../Modeler.js");
var className = 'ElementCreditScoreCommentary';

var ElementCreditScoreCommentary = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreditScoreCommentary: {
      type: "TypeCreditScoreCommentaryType",
      wsdlDefinition: {
        name: "CreditScoreCommentary",
        type: "CreditScoreCommentaryType",
        "xsd:annotation": {
          "xsd:documentation": "Credit score commentary details"
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
	  CreditScoreCommentary: {
      type: "TypeCreditScoreCommentaryType",
      wsdlDefinition: {
        name: "CreditScoreCommentary",
        type: "CreditScoreCommentaryType",
        "xsd:annotation": {
          "xsd:documentation": "Credit score commentary details"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreditScoreCommentary;
Modeler.register(ElementCreditScoreCommentary, "ElementCreditScoreCommentary");
