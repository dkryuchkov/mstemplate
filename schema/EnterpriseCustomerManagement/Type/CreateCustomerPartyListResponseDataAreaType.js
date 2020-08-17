var Modeler = require("../Modeler.js");
var className = 'TypeCreateCustomerPartyListResponseDataAreaType';

var TypeCreateCustomerPartyListResponseDataAreaType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreateResponse: {
      type: "TypeCreateResponseType",
      wsdlDefinition: {
        name: "WL5G3N2:CreateResponse",
        type: "CreateResponseType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreateCustomerPartyListResponse: {
      type: "TypeCreateCustomerPartyListResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:CreateCustomerPartyListResponse",
        type: "CreateCustomerPartyListResponseType",
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
	  CreateResponse: {
      type: "TypeCreateResponseType",
      wsdlDefinition: {
        name: "WL5G3N2:CreateResponse",
        type: "CreateResponseType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreateCustomerPartyListResponse: {
      type: "TypeCreateCustomerPartyListResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:CreateCustomerPartyListResponse",
        type: "CreateCustomerPartyListResponseType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateCustomerPartyListResponseDataAreaType;
Modeler.register(TypeCreateCustomerPartyListResponseDataAreaType, "TypeCreateCustomerPartyListResponseDataAreaType");
