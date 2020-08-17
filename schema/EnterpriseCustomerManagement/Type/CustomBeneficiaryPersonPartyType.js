var Modeler = require("../Modeler.js");
var className = 'TypeCustomBeneficiaryPersonPartyType';

var TypeCustomBeneficiaryPersonPartyType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBeneficiaryPersonPartyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBeneficiaryPersonPartyType",
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
	  CustomBeneficiaryPersonPartyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBeneficiaryPersonPartyType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBeneficiaryPersonPartyType;
Modeler.register(TypeCustomBeneficiaryPersonPartyType, "TypeCustomBeneficiaryPersonPartyType");
