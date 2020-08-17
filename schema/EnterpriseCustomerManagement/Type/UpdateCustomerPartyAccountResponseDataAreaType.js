var Modeler = require("../Modeler.js");
var className = 'TypeUpdateCustomerPartyAccountResponseDataAreaType';

var TypeUpdateCustomerPartyAccountResponseDataAreaType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UpdateResponse: {
      type: "TypeUpdateResponseType",
      wsdlDefinition: {
        name: "WL5G3N2:UpdateResponse",
        type: "UpdateResponseType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    UpdateCustomerPartyAccountResponse: {
      type: "TypeUpdateCustomerPartyAccountResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:UpdateCustomerPartyAccountResponse",
        type: "UpdateCustomerPartyAccountResponseType",
        attribute: false,
        ns: "WL5G3N1"
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
	  UpdateResponse: {
      type: "TypeUpdateResponseType",
      wsdlDefinition: {
        name: "WL5G3N2:UpdateResponse",
        type: "UpdateResponseType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    UpdateCustomerPartyAccountResponse: {
      type: "TypeUpdateCustomerPartyAccountResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:UpdateCustomerPartyAccountResponse",
        type: "UpdateCustomerPartyAccountResponseType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeUpdateCustomerPartyAccountResponseDataAreaType;
Modeler.register(TypeUpdateCustomerPartyAccountResponseDataAreaType, "TypeUpdateCustomerPartyAccountResponseDataAreaType");
