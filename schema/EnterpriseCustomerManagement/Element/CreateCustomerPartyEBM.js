var Modeler = require("../Modeler.js");
var className = 'ElementCreateCustomerPartyEBM';

var ElementCreateCustomerPartyEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreateCustomerPartyEBM: {
      type: "TypeCreateCustomerPartyEBMType",
      wsdlDefinition: {
        name: "CreateCustomerPartyEBM",
        type: "CreateCustomerPartyEBMType",
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
	  CreateCustomerPartyEBM: {
      type: "TypeCreateCustomerPartyEBMType",
      wsdlDefinition: {
        name: "CreateCustomerPartyEBM",
        type: "CreateCustomerPartyEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateCustomerPartyEBM;
Modeler.register(ElementCreateCustomerPartyEBM, "ElementCreateCustomerPartyEBM");
