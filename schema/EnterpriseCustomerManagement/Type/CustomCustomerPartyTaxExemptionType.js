var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyTaxExemptionType';

var TypeCustomCustomerPartyTaxExemptionType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ChangeIndicator: {
      type: "TypeChangeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ChangeIndicator",
        type: "ChangeIndicatorType",
        attribute: false,
        ns: "corecomcust"
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
	  ChangeIndicator: {
      type: "TypeChangeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ChangeIndicator",
        type: "ChangeIndicatorType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyTaxExemptionType;
Modeler.register(TypeCustomCustomerPartyTaxExemptionType, "TypeCustomCustomerPartyTaxExemptionType");
