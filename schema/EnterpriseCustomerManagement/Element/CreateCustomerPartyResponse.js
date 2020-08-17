var Modeler = require("../Modeler.js");
var className = 'ElementCreateCustomerPartyResponse';

var ElementCreateCustomerPartyResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreateCustomerPartyResponse: {
      type: "TypeCreateCustomerPartyResponseType",
      wsdlDefinition: {
        name: "CreateCustomerPartyResponse",
        type: "CreateCustomerPartyResponseType",
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
	  CreateCustomerPartyResponse: {
      type: "TypeCreateCustomerPartyResponseType",
      wsdlDefinition: {
        name: "CreateCustomerPartyResponse",
        type: "CreateCustomerPartyResponseType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateCustomerPartyResponse;
Modeler.register(ElementCreateCustomerPartyResponse, "ElementCreateCustomerPartyResponse");
