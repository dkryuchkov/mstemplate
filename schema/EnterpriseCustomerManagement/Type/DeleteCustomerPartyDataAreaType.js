var Modeler = require("../Modeler.js");
var className = 'TypeDeleteCustomerPartyDataAreaType';

var TypeDeleteCustomerPartyDataAreaType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Delete: {
      type: "TypeDeleteType",
      wsdlDefinition: {
        name: "WL5G3N2:Delete",
        type: "DeleteType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeleteCustomerParty: {
      type: "TypeDeleteCustomerPartyType",
      wsdlDefinition: {
        name: "WL5G3N1:DeleteCustomerParty",
        type: "DeleteCustomerPartyType",
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
	  Delete: {
      type: "TypeDeleteType",
      wsdlDefinition: {
        name: "WL5G3N2:Delete",
        type: "DeleteType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeleteCustomerParty: {
      type: "TypeDeleteCustomerPartyType",
      wsdlDefinition: {
        name: "WL5G3N1:DeleteCustomerParty",
        type: "DeleteCustomerPartyType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDeleteCustomerPartyDataAreaType;
Modeler.register(TypeDeleteCustomerPartyDataAreaType, "TypeDeleteCustomerPartyDataAreaType");
