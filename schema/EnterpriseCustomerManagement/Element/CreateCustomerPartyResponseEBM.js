var Modeler = require("../Modeler.js");
var className = 'ElementCreateCustomerPartyResponseEBM';

var ElementCreateCustomerPartyResponseEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreateCustomerPartyResponseEBM: {
      type: "TypeCreateCustomerPartyResponseEBMType",
      wsdlDefinition: {
        name: "CreateCustomerPartyResponseEBM",
        type: "CreateCustomerPartyResponseEBMType",
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
	  CreateCustomerPartyResponseEBM: {
      type: "TypeCreateCustomerPartyResponseEBMType",
      wsdlDefinition: {
        name: "CreateCustomerPartyResponseEBM",
        type: "CreateCustomerPartyResponseEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateCustomerPartyResponseEBM;
Modeler.register(ElementCreateCustomerPartyResponseEBM, "ElementCreateCustomerPartyResponseEBM");
