var Modeler = require("../Modeler.js");
var className = 'ElementProcessCustomerPartyListEBM';

var ElementProcessCustomerPartyListEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProcessCustomerPartyListEBM: {
      type: "TypeProcessCustomerPartyListEBMType",
      wsdlDefinition: {
        name: "ProcessCustomerPartyListEBM",
        type: "ProcessCustomerPartyListEBMType",
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
	  ProcessCustomerPartyListEBM: {
      type: "TypeProcessCustomerPartyListEBMType",
      wsdlDefinition: {
        name: "ProcessCustomerPartyListEBM",
        type: "ProcessCustomerPartyListEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProcessCustomerPartyListEBM;
Modeler.register(ElementProcessCustomerPartyListEBM, "ElementProcessCustomerPartyListEBM");
