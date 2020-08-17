var Modeler = require("../Modeler.js");
var className = 'ElementQueryCustomerPartyResponse';

var ElementQueryCustomerPartyResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QueryCustomerPartyResponse: {
      type: "TypeQueryCustomerPartyResponseType",
      wsdlDefinition: {
        name: "QueryCustomerPartyResponse",
        type: "QueryCustomerPartyResponseType",
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
	  QueryCustomerPartyResponse: {
      type: "TypeQueryCustomerPartyResponseType",
      wsdlDefinition: {
        name: "QueryCustomerPartyResponse",
        type: "QueryCustomerPartyResponseType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementQueryCustomerPartyResponse;
Modeler.register(ElementQueryCustomerPartyResponse, "ElementQueryCustomerPartyResponse");
