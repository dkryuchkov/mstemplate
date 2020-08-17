var Modeler = require("../Modeler.js");
var className = 'ElementDeleteCustomerPartyListEBM';

var ElementDeleteCustomerPartyListEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DeleteCustomerPartyListEBM: {
      type: "TypeDeleteCustomerPartyListEBMType",
      wsdlDefinition: {
        name: "DeleteCustomerPartyListEBM",
        type: "DeleteCustomerPartyListEBMType",
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
	  DeleteCustomerPartyListEBM: {
      type: "TypeDeleteCustomerPartyListEBMType",
      wsdlDefinition: {
        name: "DeleteCustomerPartyListEBM",
        type: "DeleteCustomerPartyListEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteCustomerPartyListEBM;
Modeler.register(ElementDeleteCustomerPartyListEBM, "ElementDeleteCustomerPartyListEBM");
