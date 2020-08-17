var Modeler = require("../Modeler.js");
var className = 'TypeQueryCustomerPartyDataAreaType';

var TypeQueryCustomerPartyDataAreaType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Query: {
      type: "TypeSimpleQueryType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Query",
        type: "WL5G3N2:SimpleQueryType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    QueryCustomerParty: {
      type: "TypeQueryCustomerPartyType",
      wsdlDefinition: {
        name: "WL5G3N1:QueryCustomerParty",
        type: "QueryCustomerPartyType",
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
	  Query: {
      type: "TypeSimpleQueryType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Query",
        type: "WL5G3N2:SimpleQueryType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    QueryCustomerParty: {
      type: "TypeQueryCustomerPartyType",
      wsdlDefinition: {
        name: "WL5G3N1:QueryCustomerParty",
        type: "QueryCustomerPartyType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeQueryCustomerPartyDataAreaType;
Modeler.register(TypeQueryCustomerPartyDataAreaType, "TypeQueryCustomerPartyDataAreaType");
