var Modeler = require("../Modeler.js");
var className = 'ElementProcessCreditEligibilityVerificationResponseEBM';

var ElementProcessCreditEligibilityVerificationResponseEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProcessCreditEligibilityVerificationResponseEBM: {
      type: "TypeProcessCreditEligibilityVerificationResponseEBMType",
      wsdlDefinition: {
        name: "ProcessCreditEligibilityVerificationResponseEBM",
        type: "ProcessCreditEligibilityVerificationResponseEBMType",
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
	  ProcessCreditEligibilityVerificationResponseEBM: {
      type: "TypeProcessCreditEligibilityVerificationResponseEBMType",
      wsdlDefinition: {
        name: "ProcessCreditEligibilityVerificationResponseEBM",
        type: "ProcessCreditEligibilityVerificationResponseEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProcessCreditEligibilityVerificationResponseEBM;
Modeler.register(ElementProcessCreditEligibilityVerificationResponseEBM, "ElementProcessCreditEligibilityVerificationResponseEBM");
