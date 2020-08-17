var Modeler = require("../Modeler.js");
var className = 'ElementProcessCreditEligibilityVerificationResponse';

var ElementProcessCreditEligibilityVerificationResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProcessCreditEligibilityVerificationResponse: {
      type: "TypeProcessCreditEligibilityVerificationResponseType",
      wsdlDefinition: {
        name: "ProcessCreditEligibilityVerificationResponse",
        type: "ProcessCreditEligibilityVerificationResponseType",
        ns: "WL5G3N1",
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
	  ProcessCreditEligibilityVerificationResponse: {
      type: "TypeProcessCreditEligibilityVerificationResponseType",
      wsdlDefinition: {
        name: "ProcessCreditEligibilityVerificationResponse",
        type: "ProcessCreditEligibilityVerificationResponseType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProcessCreditEligibilityVerificationResponse;
Modeler.register(ElementProcessCreditEligibilityVerificationResponse, "ElementProcessCreditEligibilityVerificationResponse");
