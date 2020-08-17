var Modeler = require("../Modeler.js");
var className = 'ElementBeneficiary';

var ElementBeneficiary = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Beneficiary: {
      type: "TypeBeneficiaryType",
      wsdlDefinition: {
        name: "Beneficiary",
        type: "BeneficiaryType",
        "xsd:annotation": {
          "xsd:documentation": "This component represents information about a beneficiary, e.g., beneficiary of an insurance"
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
	  Beneficiary: {
      type: "TypeBeneficiaryType",
      wsdlDefinition: {
        name: "Beneficiary",
        type: "BeneficiaryType",
        "xsd:annotation": {
          "xsd:documentation": "This component represents information about a beneficiary, e.g., beneficiary of an insurance"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBeneficiary;
Modeler.register(ElementBeneficiary, "ElementBeneficiary");
