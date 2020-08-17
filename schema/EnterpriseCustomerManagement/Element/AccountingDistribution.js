var Modeler = require("../Modeler.js");
var className = 'ElementAccountingDistribution';

var ElementAccountingDistribution = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AccountingDistribution: {
      type: "TypeAccountingDistributionType",
      wsdlDefinition: {
        name: "AccountingDistribution",
        type: "AccountingDistributionType",
        "xsd:annotation": {
          "xsd:documentation": "An Accounting Distribution identifies how monetary amounts are distributed accross different financial entities within an organization"
        },
        ns: "WL5G3N2",
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
	  AccountingDistribution: {
      type: "TypeAccountingDistributionType",
      wsdlDefinition: {
        name: "AccountingDistribution",
        type: "AccountingDistributionType",
        "xsd:annotation": {
          "xsd:documentation": "An Accounting Distribution identifies how monetary amounts are distributed accross different financial entities within an organization"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAccountingDistribution;
Modeler.register(ElementAccountingDistribution, "ElementAccountingDistribution");
