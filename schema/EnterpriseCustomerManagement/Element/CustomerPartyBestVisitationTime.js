var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyBestVisitationTime';

var ElementCustomerPartyBestVisitationTime = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyBestVisitationTime: {
      type: "TypeCustomerPartyBestVisitationTimeType",
      wsdlDefinition: {
        name: "CustomerPartyBestVisitationTime",
        type: "CustomerPartyBestVisitationTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Captures the customer's availability so that the sales representatives can visit them at the most suitable  times"
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
	  CustomerPartyBestVisitationTime: {
      type: "TypeCustomerPartyBestVisitationTimeType",
      wsdlDefinition: {
        name: "CustomerPartyBestVisitationTime",
        type: "CustomerPartyBestVisitationTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Captures the customer's availability so that the sales representatives can visit them at the most suitable  times"
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyBestVisitationTime;
Modeler.register(ElementCustomerPartyBestVisitationTime, "ElementCustomerPartyBestVisitationTime");
