var Modeler = require("../Modeler.js");
var className = 'ElementUpdateCustomerPartyAccountResponseEBM';

var ElementUpdateCustomerPartyAccountResponseEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UpdateCustomerPartyAccountResponseEBM: {
      type: "TypeUpdateCustomerPartyAccountResponseEBMType",
      wsdlDefinition: {
        name: "UpdateCustomerPartyAccountResponseEBM",
        type: "UpdateCustomerPartyAccountResponseEBMType",
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
	  UpdateCustomerPartyAccountResponseEBM: {
      type: "TypeUpdateCustomerPartyAccountResponseEBMType",
      wsdlDefinition: {
        name: "UpdateCustomerPartyAccountResponseEBM",
        type: "UpdateCustomerPartyAccountResponseEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUpdateCustomerPartyAccountResponseEBM;
Modeler.register(ElementUpdateCustomerPartyAccountResponseEBM, "ElementUpdateCustomerPartyAccountResponseEBM");
