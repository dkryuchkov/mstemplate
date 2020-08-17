var Modeler = require("../Modeler.js");
var className = 'TypeCustomBeneficiaryType';

var TypeCustomBeneficiaryType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ListOfTrustBeneficiary: {
      type: "TypeTrustBeneficiaryType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ListOfTrustBeneficiary",
        type: "TrustBeneficiaryType",
        attribute: false,
        ns: "corecomcust"
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
	  ListOfTrustBeneficiary: {
      type: "TypeTrustBeneficiaryType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ListOfTrustBeneficiary",
        type: "TrustBeneficiaryType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBeneficiaryType;
Modeler.register(TypeCustomBeneficiaryType, "TypeCustomBeneficiaryType");
