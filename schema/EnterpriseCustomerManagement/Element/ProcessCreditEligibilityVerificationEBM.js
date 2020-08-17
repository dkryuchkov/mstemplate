var Modeler = require("../Modeler.js");
var className = 'ElementProcessCreditEligibilityVerificationEBM';

var ElementProcessCreditEligibilityVerificationEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProcessCreditEligibilityVerificationEBM: {
      type: "TypeProcessCreditEligibilityVerificationEBMType",
      wsdlDefinition: {
        name: "ProcessCreditEligibilityVerificationEBM",
        type: "ProcessCreditEligibilityVerificationEBMType",
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
	  ProcessCreditEligibilityVerificationEBM: {
      type: "TypeProcessCreditEligibilityVerificationEBMType",
      wsdlDefinition: {
        name: "ProcessCreditEligibilityVerificationEBM",
        type: "ProcessCreditEligibilityVerificationEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProcessCreditEligibilityVerificationEBM;
Modeler.register(ElementProcessCreditEligibilityVerificationEBM, "ElementProcessCreditEligibilityVerificationEBM");
