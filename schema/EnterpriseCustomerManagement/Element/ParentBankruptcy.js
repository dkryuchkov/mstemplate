var Modeler = require("../Modeler.js");
var className = 'ElementParentBankruptcy';

var ElementParentBankruptcy = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentBankruptcy: {
      type: "TypeBankruptcyType",
      wsdlDefinition: {
        name: "ParentBankruptcy",
        type: "BankruptcyType",
        "xsd:annotation": {
          "xsd:documentation": "Parent Bankruptcy details"
        },
        ns: "WL5G3N2",
        attribute: false
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
	  ParentBankruptcy: {
      type: "TypeBankruptcyType",
      wsdlDefinition: {
        name: "ParentBankruptcy",
        type: "BankruptcyType",
        "xsd:annotation": {
          "xsd:documentation": "Parent Bankruptcy details"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentBankruptcy;
Modeler.register(ElementParentBankruptcy, "ElementParentBankruptcy");
