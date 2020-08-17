var Modeler = require("../Modeler.js");
var className = 'ElementChartOfAccountsReference';

var ElementChartOfAccountsReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ChartOfAccountsReference: {
      type: "TypeChartOfAccountsReferenceType",
      wsdlDefinition: {
        name: "ChartOfAccountsReference",
        type: "ChartOfAccountsReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Chart of Accounts"
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
	  ChartOfAccountsReference: {
      type: "TypeChartOfAccountsReferenceType",
      wsdlDefinition: {
        name: "ChartOfAccountsReference",
        type: "ChartOfAccountsReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Chart of Accounts"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementChartOfAccountsReference;
Modeler.register(ElementChartOfAccountsReference, "ElementChartOfAccountsReference");
