var Modeler = require("../Modeler.js");
var className = 'TypeCustomBankChargeBearerPartyReferenceType';

var TypeCustomBankChargeBearerPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBankChargeBearerPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBankChargeBearerPartyReferenceType",
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
	  CustomBankChargeBearerPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBankChargeBearerPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBankChargeBearerPartyReferenceType;
Modeler.register(TypeCustomBankChargeBearerPartyReferenceType, "TypeCustomBankChargeBearerPartyReferenceType");
