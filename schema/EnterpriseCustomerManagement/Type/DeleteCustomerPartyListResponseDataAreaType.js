var Modeler = require("../Modeler.js");
var className = 'TypeDeleteCustomerPartyListResponseDataAreaType';

var TypeDeleteCustomerPartyListResponseDataAreaType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DeleteResponse: {
      type: "TypeDeleteResponseType",
      wsdlDefinition: {
        name: "WL5G3N2:DeleteResponse",
        type: "DeleteResponseType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeleteCustomerPartyListResponse: {
      type: "TypeDeleteCustomerPartyListResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:DeleteCustomerPartyListResponse",
        type: "DeleteCustomerPartyListResponseType",
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
	  DeleteResponse: {
      type: "TypeDeleteResponseType",
      wsdlDefinition: {
        name: "WL5G3N2:DeleteResponse",
        type: "DeleteResponseType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeleteCustomerPartyListResponse: {
      type: "TypeDeleteCustomerPartyListResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:DeleteCustomerPartyListResponse",
        type: "DeleteCustomerPartyListResponseType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDeleteCustomerPartyListResponseDataAreaType;
Modeler.register(TypeDeleteCustomerPartyListResponseDataAreaType, "TypeDeleteCustomerPartyListResponseDataAreaType");
