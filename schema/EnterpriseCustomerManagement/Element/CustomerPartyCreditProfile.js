var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyCreditProfile';

var ElementCustomerPartyCreditProfile = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyCreditProfile: {
      type: "TypeCustomerPartyCreditProfileType",
      wsdlDefinition: {
        name: "CustomerPartyCreditProfile",
        type: "CustomerPartyCreditProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Credit Profile of the Customer"
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
	  CustomerPartyCreditProfile: {
      type: "TypeCustomerPartyCreditProfileType",
      wsdlDefinition: {
        name: "CustomerPartyCreditProfile",
        type: "CustomerPartyCreditProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Credit Profile of the Customer"
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyCreditProfile;
Modeler.register(ElementCustomerPartyCreditProfile, "ElementCustomerPartyCreditProfile");
