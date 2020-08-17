var Modeler = require("../Modeler.js");
var className = 'ElementUpdateCustomerPartyResponseEBM';

var ElementUpdateCustomerPartyResponseEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UpdateCustomerPartyResponseEBM: {
      type: "TypeUpdateCustomerPartyResponseEBMType",
      wsdlDefinition: {
        name: "UpdateCustomerPartyResponseEBM",
        type: "UpdateCustomerPartyResponseEBMType",
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
	  UpdateCustomerPartyResponseEBM: {
      type: "TypeUpdateCustomerPartyResponseEBMType",
      wsdlDefinition: {
        name: "UpdateCustomerPartyResponseEBM",
        type: "UpdateCustomerPartyResponseEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUpdateCustomerPartyResponseEBM;
Modeler.register(ElementUpdateCustomerPartyResponseEBM, "ElementUpdateCustomerPartyResponseEBM");
