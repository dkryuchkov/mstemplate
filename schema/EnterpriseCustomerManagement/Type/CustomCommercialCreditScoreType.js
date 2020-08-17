var Modeler = require("../Modeler.js");
var className = 'TypeCustomCommercialCreditScoreType';

var TypeCustomCommercialCreditScoreType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCommercialCreditScoreType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCommercialCreditScoreType",
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
	  CustomCommercialCreditScoreType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCommercialCreditScoreType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCommercialCreditScoreType;
Modeler.register(TypeCustomCommercialCreditScoreType, "TypeCustomCommercialCreditScoreType");
