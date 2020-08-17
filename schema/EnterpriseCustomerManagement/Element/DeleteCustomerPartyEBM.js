var Modeler = require("../Modeler.js");
var className = 'ElementDeleteCustomerPartyEBM';

var ElementDeleteCustomerPartyEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DeleteCustomerPartyEBM: {
      type: "TypeDeleteCustomerPartyEBMType",
      wsdlDefinition: {
        name: "DeleteCustomerPartyEBM",
        type: "DeleteCustomerPartyEBMType",
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
	  DeleteCustomerPartyEBM: {
      type: "TypeDeleteCustomerPartyEBMType",
      wsdlDefinition: {
        name: "DeleteCustomerPartyEBM",
        type: "DeleteCustomerPartyEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteCustomerPartyEBM;
Modeler.register(ElementDeleteCustomerPartyEBM, "ElementDeleteCustomerPartyEBM");
