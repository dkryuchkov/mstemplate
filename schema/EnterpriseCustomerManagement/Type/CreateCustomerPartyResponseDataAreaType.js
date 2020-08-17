var Modeler = require("../Modeler.js");
var className = 'TypeCreateCustomerPartyResponseDataAreaType';

var TypeCreateCustomerPartyResponseDataAreaType = function(json, parentObj) {
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
    CreateCustomerPartyResponse: {
      type: "TypeCreateCustomerPartyResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:CreateCustomerPartyResponse",
        type: "CreateCustomerPartyResponseType",
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
    CreateCustomerPartyResponse: {
      type: "TypeCreateCustomerPartyResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:CreateCustomerPartyResponse",
        type: "CreateCustomerPartyResponseType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateCustomerPartyResponseDataAreaType;
Modeler.register(TypeCreateCustomerPartyResponseDataAreaType, "TypeCreateCustomerPartyResponseDataAreaType");
