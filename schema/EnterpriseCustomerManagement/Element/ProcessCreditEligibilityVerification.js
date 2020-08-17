var Modeler = require("../Modeler.js");
var className = 'ElementProcessCreditEligibilityVerification';

var ElementProcessCreditEligibilityVerification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProcessCreditEligibilityVerification: {
      type: "TypeProcessCreditEligibilityVerificationType",
      wsdlDefinition: {
        name: "ProcessCreditEligibilityVerification",
        type: "ProcessCreditEligibilityVerificationType",
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
	  ProcessCreditEligibilityVerification: {
      type: "TypeProcessCreditEligibilityVerificationType",
      wsdlDefinition: {
        name: "ProcessCreditEligibilityVerification",
        type: "ProcessCreditEligibilityVerificationType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProcessCreditEligibilityVerification;
Modeler.register(ElementProcessCreditEligibilityVerification, "ElementProcessCreditEligibilityVerification");
