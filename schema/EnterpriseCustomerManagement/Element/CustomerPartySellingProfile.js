var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartySellingProfile';

var ElementCustomerPartySellingProfile = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartySellingProfile: {
      type: "TypeCustomerPartySellingProfileType",
      wsdlDefinition: {
        name: "CustomerPartySellingProfile",
        type: "CustomerPartySellingProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Options for Sales Order creation"
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
	  CustomerPartySellingProfile: {
      type: "TypeCustomerPartySellingProfileType",
      wsdlDefinition: {
        name: "CustomerPartySellingProfile",
        type: "CustomerPartySellingProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Options for Sales Order creation"
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartySellingProfile;
Modeler.register(ElementCustomerPartySellingProfile, "ElementCustomerPartySellingProfile");
