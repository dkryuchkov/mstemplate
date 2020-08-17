var Modeler = require("../Modeler.js");
var className = 'ElementProcessCustomerPartyListResponseEBM';

var ElementProcessCustomerPartyListResponseEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProcessCustomerPartyListResponseEBM: {
      type: "TypeProcessCustomerPartyListResponseEBMType",
      wsdlDefinition: {
        name: "ProcessCustomerPartyListResponseEBM",
        type: "ProcessCustomerPartyListResponseEBMType",
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
	  ProcessCustomerPartyListResponseEBM: {
      type: "TypeProcessCustomerPartyListResponseEBMType",
      wsdlDefinition: {
        name: "ProcessCustomerPartyListResponseEBM",
        type: "ProcessCustomerPartyListResponseEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProcessCustomerPartyListResponseEBM;
Modeler.register(ElementProcessCustomerPartyListResponseEBM, "ElementProcessCustomerPartyListResponseEBM");
