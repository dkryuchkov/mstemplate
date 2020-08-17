var Modeler = require("../Modeler.js");
var className = 'TypeServiceCreditCalculationGroupReferenceType';

var TypeServiceCreditCalculationGroupReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ServiceCreditCalculationGroupIdentification: {
      type: "TypeServiceCreditCalculationGroupIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ServiceCreditCalculationGroupIdentification",
        type: "ServiceCreditCalculationGroupIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomServiceCreditCalculationGroupReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomServiceCreditCalculationGroupReferenceType",
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
	  ServiceCreditCalculationGroupIdentification: {
      type: "TypeServiceCreditCalculationGroupIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ServiceCreditCalculationGroupIdentification",
        type: "ServiceCreditCalculationGroupIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomServiceCreditCalculationGroupReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomServiceCreditCalculationGroupReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeServiceCreditCalculationGroupReferenceType;
Modeler.register(TypeServiceCreditCalculationGroupReferenceType, "TypeServiceCreditCalculationGroupReferenceType");
