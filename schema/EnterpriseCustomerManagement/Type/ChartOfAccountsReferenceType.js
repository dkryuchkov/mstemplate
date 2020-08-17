var Modeler = require("../Modeler.js");
var className = 'TypeChartOfAccountsReferenceType';

var TypeChartOfAccountsReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ChartOfAccountsIdentification: {
      type: "TypeChartOfAccountsIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ChartOfAccountsIdentification",
        type: "ChartOfAccountsIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomChartOfAccountsReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomChartOfAccountsReferenceType",
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
	  ChartOfAccountsIdentification: {
      type: "TypeChartOfAccountsIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ChartOfAccountsIdentification",
        type: "ChartOfAccountsIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomChartOfAccountsReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomChartOfAccountsReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeChartOfAccountsReferenceType;
Modeler.register(TypeChartOfAccountsReferenceType, "TypeChartOfAccountsReferenceType");
