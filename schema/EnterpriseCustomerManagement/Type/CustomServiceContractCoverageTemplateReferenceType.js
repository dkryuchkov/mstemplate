var Modeler = require("../Modeler.js");
var className = 'TypeCustomServiceContractCoverageTemplateReferenceType';

var TypeCustomServiceContractCoverageTemplateReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomServiceContractCoverageTemplateReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomServiceContractCoverageTemplateReferenceType",
        attribute: false,
        type: "xsd:string"
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
	  CustomServiceContractCoverageTemplateReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomServiceContractCoverageTemplateReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomServiceContractCoverageTemplateReferenceType;
Modeler.register(TypeCustomServiceContractCoverageTemplateReferenceType, "TypeCustomServiceContractCoverageTemplateReferenceType");
