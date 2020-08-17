var Modeler = require("../Modeler.js");
var className = 'TypeTrustBeneficiaryType';

var TypeTrustBeneficiaryType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TrustBeneficiary: {
      type: "TypeTrustBeneficiaryDetailsType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:TrustBeneficiary",
        type: "TrustBeneficiaryDetailsType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  TrustBeneficiary: {
      type: "TypeTrustBeneficiaryDetailsType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:TrustBeneficiary",
        type: "TrustBeneficiaryDetailsType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeTrustBeneficiaryType;
Modeler.register(TypeTrustBeneficiaryType, "TypeTrustBeneficiaryType");
