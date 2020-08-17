var Modeler = require("../Modeler.js");
var className = 'ElementUpdateCustomerPartyResponse';

var ElementUpdateCustomerPartyResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UpdateCustomerPartyResponse: {
      type: "TypeUpdateCustomerPartyResponseType",
      wsdlDefinition: {
        name: "UpdateCustomerPartyResponse",
        type: "UpdateCustomerPartyResponseType",
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
	  UpdateCustomerPartyResponse: {
      type: "TypeUpdateCustomerPartyResponseType",
      wsdlDefinition: {
        name: "UpdateCustomerPartyResponse",
        type: "UpdateCustomerPartyResponseType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUpdateCustomerPartyResponse;
Modeler.register(ElementUpdateCustomerPartyResponse, "ElementUpdateCustomerPartyResponse");
