var Modeler = require("../Modeler.js");
var className = 'ElementUpdateCustomerPartyAccountEBM';

var ElementUpdateCustomerPartyAccountEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UpdateCustomerPartyAccountEBM: {
      type: "TypeUpdateCustomerPartyAccountEBMType",
      wsdlDefinition: {
        name: "UpdateCustomerPartyAccountEBM",
        type: "UpdateCustomerPartyAccountEBMType",
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
	  UpdateCustomerPartyAccountEBM: {
      type: "TypeUpdateCustomerPartyAccountEBMType",
      wsdlDefinition: {
        name: "UpdateCustomerPartyAccountEBM",
        type: "UpdateCustomerPartyAccountEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUpdateCustomerPartyAccountEBM;
Modeler.register(ElementUpdateCustomerPartyAccountEBM, "ElementUpdateCustomerPartyAccountEBM");
