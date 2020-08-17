var Modeler = require("../Modeler.js");
var className = 'TypeCreateCustomerPartyDataAreaType';

var TypeCreateCustomerPartyDataAreaType = function(json, parentObj) {
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
    CreateCustomerParty: {
      type: "TypeCreateCustomerPartyType",
      wsdlDefinition: {
        name: "WL5G3N1:CreateCustomerParty",
        type: "CreateCustomerPartyType",
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
    CreateCustomerParty: {
      type: "TypeCreateCustomerPartyType",
      wsdlDefinition: {
        name: "WL5G3N1:CreateCustomerParty",
        type: "CreateCustomerPartyType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateCustomerPartyDataAreaType;
Modeler.register(TypeCreateCustomerPartyDataAreaType, "TypeCreateCustomerPartyDataAreaType");
