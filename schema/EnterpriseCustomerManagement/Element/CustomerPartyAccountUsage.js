var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyAccountUsage';

var ElementCustomerPartyAccountUsage = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyAccountUsage: {
      type: "TypeCustomerPartyAccountUsageType",
      wsdlDefinition: {
        name: "CustomerPartyAccountUsage",
        type: "CustomerPartyAccountUsageType",
        "xsd:annotation": {
          "xsd:documentation": "Usages or Roles that this Customer Party can be assigned. Some example values are: ShipTo, BillTo, Broker, SoldTo etc."
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
	  CustomerPartyAccountUsage: {
      type: "TypeCustomerPartyAccountUsageType",
      wsdlDefinition: {
        name: "CustomerPartyAccountUsage",
        type: "CustomerPartyAccountUsageType",
        "xsd:annotation": {
          "xsd:documentation": "Usages or Roles that this Customer Party can be assigned. Some example values are: ShipTo, BillTo, Broker, SoldTo etc."
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyAccountUsage;
Modeler.register(ElementCustomerPartyAccountUsage, "ElementCustomerPartyAccountUsage");
