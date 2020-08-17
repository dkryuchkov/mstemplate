var Modeler = require("../Modeler.js");
var className = 'ElementChartOfAccountsIdentification';

var ElementChartOfAccountsIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ChartOfAccountsIdentification: {
      type: "TypeChartOfAccountsIdentificationType",
      wsdlDefinition: {
        name: "ChartOfAccountsIdentification",
        type: "ChartOfAccountsIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Chart of Accounts"
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
	  ChartOfAccountsIdentification: {
      type: "TypeChartOfAccountsIdentificationType",
      wsdlDefinition: {
        name: "ChartOfAccountsIdentification",
        type: "ChartOfAccountsIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Chart of Accounts"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementChartOfAccountsIdentification;
Modeler.register(ElementChartOfAccountsIdentification, "ElementChartOfAccountsIdentification");
