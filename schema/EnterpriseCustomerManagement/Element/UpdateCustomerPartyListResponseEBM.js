var Modeler = require("../Modeler.js");
var className = 'ElementUpdateCustomerPartyListResponseEBM';

var ElementUpdateCustomerPartyListResponseEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UpdateCustomerPartyListResponseEBM: {
      type: "TypeUpdateCustomerPartyListResponseEBMType",
      wsdlDefinition: {
        name: "UpdateCustomerPartyListResponseEBM",
        type: "UpdateCustomerPartyListResponseEBMType",
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
	  UpdateCustomerPartyListResponseEBM: {
      type: "TypeUpdateCustomerPartyListResponseEBMType",
      wsdlDefinition: {
        name: "UpdateCustomerPartyListResponseEBM",
        type: "UpdateCustomerPartyListResponseEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUpdateCustomerPartyListResponseEBM;
Modeler.register(ElementUpdateCustomerPartyListResponseEBM, "ElementUpdateCustomerPartyListResponseEBM");
