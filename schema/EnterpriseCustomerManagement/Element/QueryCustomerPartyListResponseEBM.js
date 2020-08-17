var Modeler = require("../Modeler.js");
var className = 'ElementQueryCustomerPartyListResponseEBM';

var ElementQueryCustomerPartyListResponseEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QueryCustomerPartyListResponseEBM: {
      type: "TypeQueryCustomerPartyListResponseEBMType",
      wsdlDefinition: {
        name: "QueryCustomerPartyListResponseEBM",
        type: "QueryCustomerPartyListResponseEBMType",
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
	  QueryCustomerPartyListResponseEBM: {
      type: "TypeQueryCustomerPartyListResponseEBMType",
      wsdlDefinition: {
        name: "QueryCustomerPartyListResponseEBM",
        type: "QueryCustomerPartyListResponseEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementQueryCustomerPartyListResponseEBM;
Modeler.register(ElementQueryCustomerPartyListResponseEBM, "ElementQueryCustomerPartyListResponseEBM");
