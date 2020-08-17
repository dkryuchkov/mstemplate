var Modeler = require("../Modeler.js");
var className = 'TypeCustomBankPartyReferenceType';

var TypeCustomBankPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBankPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBankPartyReferenceType",
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
	  CustomBankPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBankPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBankPartyReferenceType;
Modeler.register(TypeCustomBankPartyReferenceType, "TypeCustomBankPartyReferenceType");
