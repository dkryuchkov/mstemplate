var Modeler = require("../Modeler.js");
var className = 'TypeQueryCustomerPartyListDataAreaType';

var TypeQueryCustomerPartyListDataAreaType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Query: {
      type: "TypeCustomerPartyComplexQueryType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Query",
        type: "CustomerPartyComplexQueryType",
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
      type: "TypeCustomerPartyComplexQueryType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Query",
        type: "CustomerPartyComplexQueryType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeQueryCustomerPartyListDataAreaType;
Modeler.register(TypeQueryCustomerPartyListDataAreaType, "TypeQueryCustomerPartyListDataAreaType");
