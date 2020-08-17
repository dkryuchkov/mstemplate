var Modeler = require("../Modeler.js");
var className = 'TypeDeleteCustomerPartyListDataAreaType';

var TypeDeleteCustomerPartyListDataAreaType = function(json, parentObj) {
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
    DeleteCustomerPartyList: {
      type: "TypeDeleteCustomerPartyListType",
      wsdlDefinition: {
        name: "WL5G3N1:DeleteCustomerPartyList",
        type: "DeleteCustomerPartyListType",
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
    DeleteCustomerPartyList: {
      type: "TypeDeleteCustomerPartyListType",
      wsdlDefinition: {
        name: "WL5G3N1:DeleteCustomerPartyList",
        type: "DeleteCustomerPartyListType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDeleteCustomerPartyListDataAreaType;
Modeler.register(TypeDeleteCustomerPartyListDataAreaType, "TypeDeleteCustomerPartyListDataAreaType");
