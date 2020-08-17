var Modeler = require("../Modeler.js");
var className = 'TypeQueryCustomerPartyListResponseDataAreaType';

var TypeQueryCustomerPartyListResponseDataAreaType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QueryResponse: {
      type: "TypeQueryResponseType",
      wsdlDefinition: {
        name: "WL5G3N2:QueryResponse",
        type: "QueryResponseType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    QueryCustomerPartyListResponse: {
      type: "TypeQueryCustomerPartyListResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:QueryCustomerPartyListResponse",
        type: "QueryCustomerPartyListResponseType",
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
	  QueryResponse: {
      type: "TypeQueryResponseType",
      wsdlDefinition: {
        name: "WL5G3N2:QueryResponse",
        type: "QueryResponseType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    QueryCustomerPartyListResponse: {
      type: "TypeQueryCustomerPartyListResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:QueryCustomerPartyListResponse",
        type: "QueryCustomerPartyListResponseType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeQueryCustomerPartyListResponseDataAreaType;
Modeler.register(TypeQueryCustomerPartyListResponseDataAreaType, "TypeQueryCustomerPartyListResponseDataAreaType");
