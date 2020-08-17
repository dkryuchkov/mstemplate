var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyAccountSiteUsage';

var ElementCustomerPartyAccountSiteUsage = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyAccountSiteUsage: {
      type: "TypeCustomerPartyAccountSiteUsageType",
      wsdlDefinition: {
        name: "CustomerPartyAccountSiteUsage",
        type: "CustomerPartyAccountSiteUsageType",
        "xsd:annotation": {
          "xsd:documentation": "Usages or Roles that this Customer Site can be assigned. Some example values are: ShipTo, BillTo, Broker, SoldTo etc."
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
	  CustomerPartyAccountSiteUsage: {
      type: "TypeCustomerPartyAccountSiteUsageType",
      wsdlDefinition: {
        name: "CustomerPartyAccountSiteUsage",
        type: "CustomerPartyAccountSiteUsageType",
        "xsd:annotation": {
          "xsd:documentation": "Usages or Roles that this Customer Site can be assigned. Some example values are: ShipTo, BillTo, Broker, SoldTo etc."
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyAccountSiteUsage;
Modeler.register(ElementCustomerPartyAccountSiteUsage, "ElementCustomerPartyAccountSiteUsage");
