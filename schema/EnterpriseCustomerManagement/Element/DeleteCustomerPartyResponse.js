var Modeler = require("../Modeler.js");
var className = 'ElementDeleteCustomerPartyResponse';

var ElementDeleteCustomerPartyResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DeleteCustomerPartyResponse: {
      type: "TypeDeleteCustomerPartyResponseType",
      wsdlDefinition: {
        name: "DeleteCustomerPartyResponse",
        type: "DeleteCustomerPartyResponseType",
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
	  DeleteCustomerPartyResponse: {
      type: "TypeDeleteCustomerPartyResponseType",
      wsdlDefinition: {
        name: "DeleteCustomerPartyResponse",
        type: "DeleteCustomerPartyResponseType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteCustomerPartyResponse;
Modeler.register(ElementDeleteCustomerPartyResponse, "ElementDeleteCustomerPartyResponse");
