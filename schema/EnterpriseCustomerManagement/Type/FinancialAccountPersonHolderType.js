var Modeler = require("../Modeler.js");
var className = 'TypeFinancialAccountPersonHolderType';

var TypeFinancialAccountPersonHolderType = function(json, parentObj) {
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
      type: "TypeCustomFinancialAccountPersonHolderType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomFinancialAccountPersonHolderType",
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
      type: "TypeCustomFinancialAccountPersonHolderType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomFinancialAccountPersonHolderType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeFinancialAccountPersonHolderType;
Modeler.register(TypeFinancialAccountPersonHolderType, "TypeFinancialAccountPersonHolderType");
