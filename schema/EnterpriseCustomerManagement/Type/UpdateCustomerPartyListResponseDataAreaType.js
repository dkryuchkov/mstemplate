var Modeler = require("../Modeler.js");
var className = 'TypeUpdateCustomerPartyListResponseDataAreaType';

var TypeUpdateCustomerPartyListResponseDataAreaType = function(json, parentObj) {
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
    UpdateCustomerPartyListResponse: {
      type: "TypeUpdateCustomerPartyListResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:UpdateCustomerPartyListResponse",
        type: "UpdateCustomerPartyListResponseType",
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
    UpdateCustomerPartyListResponse: {
      type: "TypeUpdateCustomerPartyListResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:UpdateCustomerPartyListResponse",
        type: "UpdateCustomerPartyListResponseType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeUpdateCustomerPartyListResponseDataAreaType;
Modeler.register(TypeUpdateCustomerPartyListResponseDataAreaType, "TypeUpdateCustomerPartyListResponseDataAreaType");
