var Modeler = require("../Modeler.js");
var className = 'TypeCustomBeneficiaryPartyReferenceType';

var TypeCustomBeneficiaryPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBeneficiaryPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBeneficiaryPartyReferenceType",
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
	  CustomBeneficiaryPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBeneficiaryPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBeneficiaryPartyReferenceType;
Modeler.register(TypeCustomBeneficiaryPartyReferenceType, "TypeCustomBeneficiaryPartyReferenceType");
