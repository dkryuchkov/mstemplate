var Modeler = require("../Modeler.js");
var className = 'TypeServiceContractCoverageTemplateReferenceType';

var TypeServiceContractCoverageTemplateReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ServiceContractCoverageTemplateIdentification: {
      type: "TypeServiceContractCoverageTemplateIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ServiceContractCoverageTemplateIdentification",
        type: "ServiceContractCoverageTemplateIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomServiceContractCoverageTemplateReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomServiceContractCoverageTemplateReferenceType",
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
	  ServiceContractCoverageTemplateIdentification: {
      type: "TypeServiceContractCoverageTemplateIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ServiceContractCoverageTemplateIdentification",
        type: "ServiceContractCoverageTemplateIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomServiceContractCoverageTemplateReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomServiceContractCoverageTemplateReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeServiceContractCoverageTemplateReferenceType;
Modeler.register(TypeServiceContractCoverageTemplateReferenceType, "TypeServiceContractCoverageTemplateReferenceType");
