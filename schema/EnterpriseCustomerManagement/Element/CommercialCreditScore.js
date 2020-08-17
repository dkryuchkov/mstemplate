var Modeler = require("../Modeler.js");
var className = 'ElementCommercialCreditScore';

var ElementCommercialCreditScore = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CommercialCreditScore: {
      type: "TypeCommercialCreditScoreType",
      wsdlDefinition: {
        name: "CommercialCreditScore",
        type: "CommercialCreditScoreType",
        "xsd:annotation": {
          "xsd:documentation": "Commercial credit score of the credit rating"
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
	  CommercialCreditScore: {
      type: "TypeCommercialCreditScoreType",
      wsdlDefinition: {
        name: "CommercialCreditScore",
        type: "CommercialCreditScoreType",
        "xsd:annotation": {
          "xsd:documentation": "Commercial credit score of the credit rating"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCommercialCreditScore;
Modeler.register(ElementCommercialCreditScore, "ElementCommercialCreditScore");
