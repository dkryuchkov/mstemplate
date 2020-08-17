var Modeler = require("../Modeler.js");
var className = 'TypeCustomBeneficiaryOrganizationPartyType';

var TypeCustomBeneficiaryOrganizationPartyType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBeneficiaryOrganizationPartyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBeneficiaryOrganizationPartyType",
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
	  CustomBeneficiaryOrganizationPartyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBeneficiaryOrganizationPartyType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBeneficiaryOrganizationPartyType;
Modeler.register(TypeCustomBeneficiaryOrganizationPartyType, "TypeCustomBeneficiaryOrganizationPartyType");
