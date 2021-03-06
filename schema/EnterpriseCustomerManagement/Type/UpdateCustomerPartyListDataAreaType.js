var Modeler = require("../Modeler.js");
var className = 'TypeUpdateCustomerPartyListDataAreaType';

var TypeUpdateCustomerPartyListDataAreaType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Update: {
      type: "TypeUpdateType",
      wsdlDefinition: {
        name: "WL5G3N2:Update",
        type: "UpdateType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    UpdateCustomerPartyList: {
      type: "TypeUpdateCustomerPartyListType",
      wsdlDefinition: {
        name: "WL5G3N1:UpdateCustomerPartyList",
        type: "UpdateCustomerPartyListType",
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
	  Update: {
      type: "TypeUpdateType",
      wsdlDefinition: {
        name: "WL5G3N2:Update",
        type: "UpdateType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    UpdateCustomerPartyList: {
      type: "TypeUpdateCustomerPartyListType",
      wsdlDefinition: {
        name: "WL5G3N1:UpdateCustomerPartyList",
        type: "UpdateCustomerPartyListType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeUpdateCustomerPartyListDataAreaType;
Modeler.register(TypeUpdateCustomerPartyListDataAreaType, "TypeUpdateCustomerPartyListDataAreaType");
