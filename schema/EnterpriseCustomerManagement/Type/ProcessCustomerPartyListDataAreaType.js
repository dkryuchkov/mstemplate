var Modeler = require("../Modeler.js");
var className = 'TypeProcessCustomerPartyListDataAreaType';

var TypeProcessCustomerPartyListDataAreaType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Process: {
      type: "TypeProcessType",
      wsdlDefinition: {
        name: "WL5G3N2:Process",
        type: "ProcessType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ProcessCustomerPartyList: {
      type: "TypeProcessCustomerPartyListType",
      wsdlDefinition: {
        name: "WL5G3N1:ProcessCustomerPartyList",
        type: "ProcessCustomerPartyListType",
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
	  Process: {
      type: "TypeProcessType",
      wsdlDefinition: {
        name: "WL5G3N2:Process",
        type: "ProcessType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ProcessCustomerPartyList: {
      type: "TypeProcessCustomerPartyListType",
      wsdlDefinition: {
        name: "WL5G3N1:ProcessCustomerPartyList",
        type: "ProcessCustomerPartyListType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeProcessCustomerPartyListDataAreaType;
Modeler.register(TypeProcessCustomerPartyListDataAreaType, "TypeProcessCustomerPartyListDataAreaType");
