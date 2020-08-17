var Modeler = require("../Modeler.js");
var className = 'TypeFinancialAccountOrganizationHolderType';

var TypeFinancialAccountOrganizationHolderType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OrganizationPartyReference: {
      type: "TypeOrganizationPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OrganizationPartyReference",
        type: "OrganizationPartyReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomFinancialAccountOrganizationHolderType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomFinancialAccountOrganizationHolderType",
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
	  OrganizationPartyReference: {
      type: "TypeOrganizationPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OrganizationPartyReference",
        type: "OrganizationPartyReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomFinancialAccountOrganizationHolderType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomFinancialAccountOrganizationHolderType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeFinancialAccountOrganizationHolderType;
Modeler.register(TypeFinancialAccountOrganizationHolderType, "TypeFinancialAccountOrganizationHolderType");
