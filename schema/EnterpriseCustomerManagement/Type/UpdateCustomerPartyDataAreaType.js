var Modeler = require("../Modeler.js");
var className = 'TypeUpdateCustomerPartyDataAreaType';

var TypeUpdateCustomerPartyDataAreaType = function(json, parentObj) {
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
    UpdateCustomerParty: {
      type: "TypeUpdateCustomerPartyType",
      wsdlDefinition: {
        name: "WL5G3N1:UpdateCustomerParty",
        type: "UpdateCustomerPartyType",
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
    UpdateCustomerParty: {
      type: "TypeUpdateCustomerPartyType",
      wsdlDefinition: {
        name: "WL5G3N1:UpdateCustomerParty",
        type: "UpdateCustomerPartyType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeUpdateCustomerPartyDataAreaType;
Modeler.register(TypeUpdateCustomerPartyDataAreaType, "TypeUpdateCustomerPartyDataAreaType");
