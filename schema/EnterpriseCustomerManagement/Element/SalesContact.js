var Modeler = require("../Modeler.js");
var className = 'ElementSalesContact';

var ElementSalesContact = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesContact: {
      type: "TypeContactType",
      wsdlDefinition: {
        name: "SalesContact",
        type: "ContactType",
        "xsd:annotation": {
          "xsd:documentation": "A person or department that is involved in the sales of goods or profucts"
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
	  SalesContact: {
      type: "TypeContactType",
      wsdlDefinition: {
        name: "SalesContact",
        type: "ContactType",
        "xsd:annotation": {
          "xsd:documentation": "A person or department that is involved in the sales of goods or profucts"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalesContact;
Modeler.register(ElementSalesContact, "ElementSalesContact");
