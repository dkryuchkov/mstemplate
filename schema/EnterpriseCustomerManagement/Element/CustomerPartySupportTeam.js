var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartySupportTeam';

var ElementCustomerPartySupportTeam = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartySupportTeam: {
      type: "TypeCustomerPartySupportTeamType",
      wsdlDefinition: {
        name: "CustomerPartySupportTeam",
        type: "CustomerPartySupportTeamType",
        "xsd:annotation": {
          "xsd:documentation": "Support Team assigned to the Customer"
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
	  CustomerPartySupportTeam: {
      type: "TypeCustomerPartySupportTeamType",
      wsdlDefinition: {
        name: "CustomerPartySupportTeam",
        type: "CustomerPartySupportTeamType",
        "xsd:annotation": {
          "xsd:documentation": "Support Team assigned to the Customer"
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartySupportTeam;
Modeler.register(ElementCustomerPartySupportTeam, "ElementCustomerPartySupportTeam");
