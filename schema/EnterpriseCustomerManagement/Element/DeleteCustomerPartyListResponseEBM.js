var Modeler = require("../Modeler.js");
var className = 'ElementDeleteCustomerPartyListResponseEBM';

var ElementDeleteCustomerPartyListResponseEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DeleteCustomerPartyListResponseEBM: {
      type: "TypeDeleteCustomerPartyListResponseEBMType",
      wsdlDefinition: {
        name: "DeleteCustomerPartyListResponseEBM",
        type: "DeleteCustomerPartyListResponseEBMType",
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
	  DeleteCustomerPartyListResponseEBM: {
      type: "TypeDeleteCustomerPartyListResponseEBMType",
      wsdlDefinition: {
        name: "DeleteCustomerPartyListResponseEBM",
        type: "DeleteCustomerPartyListResponseEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteCustomerPartyListResponseEBM;
Modeler.register(ElementDeleteCustomerPartyListResponseEBM, "ElementDeleteCustomerPartyListResponseEBM");
