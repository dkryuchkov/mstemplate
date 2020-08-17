var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyContactReference';

var ElementCustomerPartyContactReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyContactReference: {
      type: "TypeCustomerPartyContactReferenceType",
      wsdlDefinition: {
        name: "CustomerPartyContactReference",
        type: "CustomerPartyContactReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Contact of a Customer Party"
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
	  CustomerPartyContactReference: {
      type: "TypeCustomerPartyContactReferenceType",
      wsdlDefinition: {
        name: "CustomerPartyContactReference",
        type: "CustomerPartyContactReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Contact of a Customer Party"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyContactReference;
Modeler.register(ElementCustomerPartyContactReference, "ElementCustomerPartyContactReference");
