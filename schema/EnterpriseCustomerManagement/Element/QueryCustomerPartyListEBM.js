var Modeler = require("../Modeler.js");
var className = 'ElementQueryCustomerPartyListEBM';

var ElementQueryCustomerPartyListEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QueryCustomerPartyListEBM: {
      type: "TypeQueryCustomerPartyListEBMType",
      wsdlDefinition: {
        name: "QueryCustomerPartyListEBM",
        type: "QueryCustomerPartyListEBMType",
        ns: "WL5G3N1",
        attribute: false
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
	  QueryCustomerPartyListEBM: {
      type: "TypeQueryCustomerPartyListEBMType",
      wsdlDefinition: {
        name: "QueryCustomerPartyListEBM",
        type: "QueryCustomerPartyListEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementQueryCustomerPartyListEBM;
Modeler.register(ElementQueryCustomerPartyListEBM, "ElementQueryCustomerPartyListEBM");
