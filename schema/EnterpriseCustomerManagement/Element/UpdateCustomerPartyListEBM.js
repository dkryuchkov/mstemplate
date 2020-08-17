var Modeler = require("../Modeler.js");
var className = 'ElementUpdateCustomerPartyListEBM';

var ElementUpdateCustomerPartyListEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UpdateCustomerPartyListEBM: {
      type: "TypeUpdateCustomerPartyListEBMType",
      wsdlDefinition: {
        name: "UpdateCustomerPartyListEBM",
        type: "UpdateCustomerPartyListEBMType",
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
	  UpdateCustomerPartyListEBM: {
      type: "TypeUpdateCustomerPartyListEBMType",
      wsdlDefinition: {
        name: "UpdateCustomerPartyListEBM",
        type: "UpdateCustomerPartyListEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUpdateCustomerPartyListEBM;
Modeler.register(ElementUpdateCustomerPartyListEBM, "ElementUpdateCustomerPartyListEBM");
