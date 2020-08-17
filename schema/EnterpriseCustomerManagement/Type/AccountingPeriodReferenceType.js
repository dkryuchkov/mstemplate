var Modeler = require("../Modeler.js");
var className = 'TypeAccountingPeriodReferenceType';

var TypeAccountingPeriodReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AccountingPeriodIdentification: {
      type: "TypeAccountingPeriodIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AccountingPeriodIdentification",
        type: "AccountingPeriodIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomAccountingPeriodReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomAccountingPeriodReferenceType",
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
	  AccountingPeriodIdentification: {
      type: "TypeAccountingPeriodIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AccountingPeriodIdentification",
        type: "AccountingPeriodIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomAccountingPeriodReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomAccountingPeriodReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAccountingPeriodReferenceType;
Modeler.register(TypeAccountingPeriodReferenceType, "TypeAccountingPeriodReferenceType");
