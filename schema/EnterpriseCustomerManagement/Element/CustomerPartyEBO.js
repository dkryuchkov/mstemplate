var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyEBO';

var ElementCustomerPartyEBO = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyEBO: {
      type: "TypeCustomerPartyEBOType",
      wsdlDefinition: {
        name: "CustomerPartyEBO",
        type: "CustomerPartyEBOType",
        "xsd:annotation": {
          "xsd:documentation": "An individual or company to whom the deploying company intends to sell products or services. For example, ABC Computer and John Smith are customer parties of the deploying company."
        },
        ns: "WL5G3N1",
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
	  CustomerPartyEBO: {
      type: "TypeCustomerPartyEBOType",
      wsdlDefinition: {
        name: "CustomerPartyEBO",
        type: "CustomerPartyEBOType",
        "xsd:annotation": {
          "xsd:documentation": "An individual or company to whom the deploying company intends to sell products or services. For example, ABC Computer and John Smith are customer parties of the deploying company."
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyEBO;
Modeler.register(ElementCustomerPartyEBO, "ElementCustomerPartyEBO");
