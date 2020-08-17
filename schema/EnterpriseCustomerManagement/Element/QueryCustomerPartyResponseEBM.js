var Modeler = require("../Modeler.js");
var className = 'ElementQueryCustomerPartyResponseEBM';

var ElementQueryCustomerPartyResponseEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QueryCustomerPartyResponseEBM: {
      type: "TypeQueryCustomerPartyResponseEBMType",
      wsdlDefinition: {
        name: "QueryCustomerPartyResponseEBM",
        type: "QueryCustomerPartyResponseEBMType",
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
	  QueryCustomerPartyResponseEBM: {
      type: "TypeQueryCustomerPartyResponseEBMType",
      wsdlDefinition: {
        name: "QueryCustomerPartyResponseEBM",
        type: "QueryCustomerPartyResponseEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementQueryCustomerPartyResponseEBM;
Modeler.register(ElementQueryCustomerPartyResponseEBM, "ElementQueryCustomerPartyResponseEBM");
