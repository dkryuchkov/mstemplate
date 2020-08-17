var Modeler = require("../Modeler.js");
var className = 'ElementUpdateCustomerPartyEBM';

var ElementUpdateCustomerPartyEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UpdateCustomerPartyEBM: {
      type: "TypeUpdateCustomerPartyEBMType",
      wsdlDefinition: {
        name: "UpdateCustomerPartyEBM",
        type: "UpdateCustomerPartyEBMType",
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
	  UpdateCustomerPartyEBM: {
      type: "TypeUpdateCustomerPartyEBMType",
      wsdlDefinition: {
        name: "UpdateCustomerPartyEBM",
        type: "UpdateCustomerPartyEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUpdateCustomerPartyEBM;
Modeler.register(ElementUpdateCustomerPartyEBM, "ElementUpdateCustomerPartyEBM");
