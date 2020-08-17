var Modeler = require("../Modeler.js");
var className = 'ElementDeleteCustomerPartyResponseEBM';

var ElementDeleteCustomerPartyResponseEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DeleteCustomerPartyResponseEBM: {
      type: "TypeDeleteCustomerPartyResponseEBMType",
      wsdlDefinition: {
        name: "DeleteCustomerPartyResponseEBM",
        type: "DeleteCustomerPartyResponseEBMType",
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
	  DeleteCustomerPartyResponseEBM: {
      type: "TypeDeleteCustomerPartyResponseEBMType",
      wsdlDefinition: {
        name: "DeleteCustomerPartyResponseEBM",
        type: "DeleteCustomerPartyResponseEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteCustomerPartyResponseEBM;
Modeler.register(ElementDeleteCustomerPartyResponseEBM, "ElementDeleteCustomerPartyResponseEBM");
