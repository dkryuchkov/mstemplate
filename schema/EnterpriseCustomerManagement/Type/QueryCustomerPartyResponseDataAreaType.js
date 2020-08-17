var Modeler = require("../Modeler.js");
var className = 'TypeQueryCustomerPartyResponseDataAreaType';

var TypeQueryCustomerPartyResponseDataAreaType = function(json, parentObj) {
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
    QueryCustomerPartyResponse: {
      type: "TypeQueryCustomerPartyResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:QueryCustomerPartyResponse",
        type: "QueryCustomerPartyResponseType",
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
    QueryCustomerPartyResponse: {
      type: "TypeQueryCustomerPartyResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:QueryCustomerPartyResponse",
        type: "QueryCustomerPartyResponseType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeQueryCustomerPartyResponseDataAreaType;
Modeler.register(TypeQueryCustomerPartyResponseDataAreaType, "TypeQueryCustomerPartyResponseDataAreaType");
