var Modeler = require("../Modeler.js");
var className = 'TypeChartOfAccountsStructureReferenceType';

var TypeChartOfAccountsStructureReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ChartOfAccountsStructureIdentification: {
      type: "TypeChartOfAccountsStructureIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ChartOfAccountsStructureIdentification",
        type: "ChartOfAccountsStructureIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomChartOfAccountsStructureReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomChartOfAccountsStructureReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:ChartOfAccountsStructureIdentification",
        type: "ChartOfAccountsStructureIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomChartOfAccountsStructureReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomChartOfAccountsStructureReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeChartOfAccountsStructureReferenceType;
Modeler.register(TypeChartOfAccountsStructureReferenceType, "TypeChartOfAccountsStructureReferenceType");
