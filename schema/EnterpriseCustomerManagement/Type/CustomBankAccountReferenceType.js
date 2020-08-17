var Modeler = require("../Modeler.js");
var className = 'TypeCustomBankAccountReferenceType';

var TypeCustomBankAccountReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ListOfLinkedAccounts: {
      type: "TypeListOfLinkedAccountsType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ListOfLinkedAccounts",
        type: "ListOfLinkedAccountsType",
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
	  ListOfLinkedAccounts: {
      type: "TypeListOfLinkedAccountsType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ListOfLinkedAccounts",
        type: "ListOfLinkedAccountsType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBankAccountReferenceType;
Modeler.register(TypeCustomBankAccountReferenceType, "TypeCustomBankAccountReferenceType");
