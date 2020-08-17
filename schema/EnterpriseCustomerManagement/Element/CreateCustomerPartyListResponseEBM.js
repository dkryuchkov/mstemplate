var Modeler = require("../Modeler.js");
var className = 'ElementCreateCustomerPartyListResponseEBM';

var ElementCreateCustomerPartyListResponseEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreateCustomerPartyListResponseEBM: {
      type: "TypeCreateCustomerPartyListResponseEBMType",
      wsdlDefinition: {
        name: "CreateCustomerPartyListResponseEBM",
        type: "CreateCustomerPartyListResponseEBMType",
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
	  CreateCustomerPartyListResponseEBM: {
      type: "TypeCreateCustomerPartyListResponseEBMType",
      wsdlDefinition: {
        name: "CreateCustomerPartyListResponseEBM",
        type: "CreateCustomerPartyListResponseEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateCustomerPartyListResponseEBM;
Modeler.register(ElementCreateCustomerPartyListResponseEBM, "ElementCreateCustomerPartyListResponseEBM");
