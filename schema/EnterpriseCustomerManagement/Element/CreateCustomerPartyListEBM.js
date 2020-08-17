var Modeler = require("../Modeler.js");
var className = 'ElementCreateCustomerPartyListEBM';

var ElementCreateCustomerPartyListEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreateCustomerPartyListEBM: {
      type: "TypeCreateCustomerPartyListEBMType",
      wsdlDefinition: {
        name: "CreateCustomerPartyListEBM",
        type: "CreateCustomerPartyListEBMType",
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
	  CreateCustomerPartyListEBM: {
      type: "TypeCreateCustomerPartyListEBMType",
      wsdlDefinition: {
        name: "CreateCustomerPartyListEBM",
        type: "CreateCustomerPartyListEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateCustomerPartyListEBM;
Modeler.register(ElementCreateCustomerPartyListEBM, "ElementCreateCustomerPartyListEBM");
