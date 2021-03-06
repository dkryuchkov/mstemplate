var Modeler = require("../Modeler.js");
var className = 'TypeBeneficiaryPersonPartyType';

var TypeBeneficiaryPersonPartyType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PersonPartyReference: {
      type: "TypePersonPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PersonPartyReference",
        type: "PersonPartyReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomBeneficiaryPersonPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBeneficiaryPersonPartyType",
        attribute: false,
        ns: "WL5G3N2"
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
	  PersonPartyReference: {
      type: "TypePersonPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PersonPartyReference",
        type: "PersonPartyReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomBeneficiaryPersonPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBeneficiaryPersonPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeBeneficiaryPersonPartyType;
Modeler.register(TypeBeneficiaryPersonPartyType, "TypeBeneficiaryPersonPartyType");
