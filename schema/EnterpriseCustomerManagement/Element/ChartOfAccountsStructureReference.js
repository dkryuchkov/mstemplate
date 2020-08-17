var Modeler = require("../Modeler.js");
var className = 'ElementChartOfAccountsStructureReference';

var ElementChartOfAccountsStructureReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ChartOfAccountsStructureReference: {
      type: "TypeChartOfAccountsStructureReferenceType",
      wsdlDefinition: {
        name: "ChartOfAccountsStructureReference",
        type: "ChartOfAccountsStructureReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A Chart of Accounts Structure includes all the dimensions that you capture your accounting lines against."
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
	  ChartOfAccountsStructureReference: {
      type: "TypeChartOfAccountsStructureReferenceType",
      wsdlDefinition: {
        name: "ChartOfAccountsStructureReference",
        type: "ChartOfAccountsStructureReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A Chart of Accounts Structure includes all the dimensions that you capture your accounting lines against."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementChartOfAccountsStructureReference;
Modeler.register(ElementChartOfAccountsStructureReference, "ElementChartOfAccountsStructureReference");
