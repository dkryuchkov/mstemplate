var Modeler = require("../Modeler.js");
var className = 'TypeListOfLinkedAccountsType';

var TypeListOfLinkedAccountsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LinkedAccount: {
      type: "TypeLinkedAccountType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:LinkedAccount",
        type: "LinkedAccountType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  LinkedAccount: {
      type: "TypeLinkedAccountType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:LinkedAccount",
        type: "LinkedAccountType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfLinkedAccountsType;
Modeler.register(TypeListOfLinkedAccountsType, "TypeListOfLinkedAccountsType");
