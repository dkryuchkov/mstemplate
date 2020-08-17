var Modeler = require("../Modeler.js");
var className = 'ElementQueryCustomerPartyEBM';

var ElementQueryCustomerPartyEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QueryCustomerPartyEBM: {
      type: "TypeQueryCustomerPartyEBMType",
      wsdlDefinition: {
        name: "QueryCustomerPartyEBM",
        type: "QueryCustomerPartyEBMType",
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
	  QueryCustomerPartyEBM: {
      type: "TypeQueryCustomerPartyEBMType",
      wsdlDefinition: {
        name: "QueryCustomerPartyEBM",
        type: "QueryCustomerPartyEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementQueryCustomerPartyEBM;
Modeler.register(ElementQueryCustomerPartyEBM, "ElementQueryCustomerPartyEBM");
