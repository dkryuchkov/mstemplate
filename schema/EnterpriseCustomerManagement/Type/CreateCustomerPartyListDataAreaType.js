var Modeler = require("../Modeler.js");
var className = 'TypeCreateCustomerPartyListDataAreaType';

var TypeCreateCustomerPartyListDataAreaType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Create: {
      type: "TypeCreateType",
      wsdlDefinition: {
        name: "WL5G3N2:Create",
        type: "CreateType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreateCustomerPartyList: {
      type: "TypeCreateCustomerPartyListType",
      wsdlDefinition: {
        name: "WL5G3N1:CreateCustomerPartyList",
        type: "CreateCustomerPartyListType",
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
	  Create: {
      type: "TypeCreateType",
      wsdlDefinition: {
        name: "WL5G3N2:Create",
        type: "CreateType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreateCustomerPartyList: {
      type: "TypeCreateCustomerPartyListType",
      wsdlDefinition: {
        name: "WL5G3N1:CreateCustomerPartyList",
        type: "CreateCustomerPartyListType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateCustomerPartyListDataAreaType;
Modeler.register(TypeCreateCustomerPartyListDataAreaType, "TypeCreateCustomerPartyListDataAreaType");
