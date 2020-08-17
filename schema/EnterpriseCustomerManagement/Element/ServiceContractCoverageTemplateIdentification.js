var Modeler = require("../Modeler.js");
var className = 'ElementServiceContractCoverageTemplateIdentification';

var ElementServiceContractCoverageTemplateIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ServiceContractCoverageTemplateIdentification: {
      type: "TypeServiceContractCoverageTemplateIdentificationType",
      wsdlDefinition: {
        name: "ServiceContractCoverageTemplateIdentification",
        type: "ServiceContractCoverageTemplateIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Service Contract Coverage Template"
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
	  ServiceContractCoverageTemplateIdentification: {
      type: "TypeServiceContractCoverageTemplateIdentificationType",
      wsdlDefinition: {
        name: "ServiceContractCoverageTemplateIdentification",
        type: "ServiceContractCoverageTemplateIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Service Contract Coverage Template"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementServiceContractCoverageTemplateIdentification;
Modeler.register(ElementServiceContractCoverageTemplateIdentification, "ElementServiceContractCoverageTemplateIdentification");
