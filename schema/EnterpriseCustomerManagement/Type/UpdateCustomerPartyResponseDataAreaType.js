var Modeler = require("../Modeler.js");
var className = 'TypeUpdateCustomerPartyResponseDataAreaType';

var TypeUpdateCustomerPartyResponseDataAreaType = function(json, parentObj) {
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
    UpdateCustomerPartyResponse: {
      type: "TypeUpdateCustomerPartyResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:UpdateCustomerPartyResponse",
        type: "UpdateCustomerPartyResponseType",
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
    UpdateCustomerPartyResponse: {
      type: "TypeUpdateCustomerPartyResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:UpdateCustomerPartyResponse",
        type: "UpdateCustomerPartyResponseType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeUpdateCustomerPartyResponseDataAreaType;
Modeler.register(TypeUpdateCustomerPartyResponseDataAreaType, "TypeUpdateCustomerPartyResponseDataAreaType");
