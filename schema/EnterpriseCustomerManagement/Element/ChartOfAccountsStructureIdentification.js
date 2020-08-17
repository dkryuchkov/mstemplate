var Modeler = require("../Modeler.js");
var className = 'ElementChartOfAccountsStructureIdentification';

var ElementChartOfAccountsStructureIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ChartOfAccountsStructureIdentification: {
      type: "TypeChartOfAccountsStructureIdentificationType",
      wsdlDefinition: {
        name: "ChartOfAccountsStructureIdentification",
        type: "ChartOfAccountsStructureIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Chart of Accounts Structure"
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
	  ChartOfAccountsStructureIdentification: {
      type: "TypeChartOfAccountsStructureIdentificationType",
      wsdlDefinition: {
        name: "ChartOfAccountsStructureIdentification",
        type: "ChartOfAccountsStructureIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Chart of Accounts Structure"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementChartOfAccountsStructureIdentification;
Modeler.register(ElementChartOfAccountsStructureIdentification, "ElementChartOfAccountsStructureIdentification");
