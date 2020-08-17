var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyWorker';

var ElementCustomerPartyWorker = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyWorker: {
      type: "TypeCustomerPartyWorkerType",
      wsdlDefinition: {
        name: "CustomerPartyWorker",
        type: "CustomerPartyWorkerType",
        "xsd:annotation": {
          "xsd:documentation": "A business reference component for the Worker object."
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
	  CustomerPartyWorker: {
      type: "TypeCustomerPartyWorkerType",
      wsdlDefinition: {
        name: "CustomerPartyWorker",
        type: "CustomerPartyWorkerType",
        "xsd:annotation": {
          "xsd:documentation": "A business reference component for the Worker object."
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyWorker;
Modeler.register(ElementCustomerPartyWorker, "ElementCustomerPartyWorker");
