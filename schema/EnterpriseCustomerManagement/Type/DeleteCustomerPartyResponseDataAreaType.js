var Modeler = require("../Modeler.js");
var className = 'TypeDeleteCustomerPartyResponseDataAreaType';

var TypeDeleteCustomerPartyResponseDataAreaType = function(json, parentObj) {
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
    DeleteCustomerPartyResponse: {
      type: "TypeDeleteCustomerPartyResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:DeleteCustomerPartyResponse",
        type: "DeleteCustomerPartyResponseType",
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
    DeleteCustomerPartyResponse: {
      type: "TypeDeleteCustomerPartyResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:DeleteCustomerPartyResponse",
        type: "DeleteCustomerPartyResponseType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDeleteCustomerPartyResponseDataAreaType;
Modeler.register(TypeDeleteCustomerPartyResponseDataAreaType, "TypeDeleteCustomerPartyResponseDataAreaType");
