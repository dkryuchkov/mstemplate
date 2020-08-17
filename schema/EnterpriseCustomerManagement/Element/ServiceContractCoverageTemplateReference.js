var Modeler = require("../Modeler.js");
var className = 'ElementServiceContractCoverageTemplateReference';

var ElementServiceContractCoverageTemplateReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ServiceContractCoverageTemplateReference: {
      type: "TypeServiceContractCoverageTemplateReferenceType",
      wsdlDefinition: {
        name: "ServiceContractCoverageTemplateReference",
        type: "ServiceContractCoverageTemplateReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Service Contract Coverage Template object. A Service Contract Coverage Template contains properties that are applicable to Service Contract Item. It is associated with an item when its contract type is service or warranty. It allows for organizations to create item offerings with a common set of agreements and then modify them to meet customers' requirements (when the service contract is created at the Item Instance level after the item has been sold). The service contract coverage template  provides key information on how service should be carried out on\nproducts covered under the contract. For each business process covered, it defines the times of coverage, days of coverage, reaction and resolution times for a service request, preferred resources, and the discounted rates that would be applied when work is performed on covered products."
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
	  ServiceContractCoverageTemplateReference: {
      type: "TypeServiceContractCoverageTemplateReferenceType",
      wsdlDefinition: {
        name: "ServiceContractCoverageTemplateReference",
        type: "ServiceContractCoverageTemplateReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Service Contract Coverage Template object. A Service Contract Coverage Template contains properties that are applicable to Service Contract Item. It is associated with an item when its contract type is service or warranty. It allows for organizations to create item offerings with a common set of agreements and then modify them to meet customers' requirements (when the service contract is created at the Item Instance level after the item has been sold). The service contract coverage template  provides key information on how service should be carried out on\nproducts covered under the contract. For each business process covered, it defines the times of coverage, days of coverage, reaction and resolution times for a service request, preferred resources, and the discounted rates that would be applied when work is performed on covered products."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementServiceContractCoverageTemplateReference;
Modeler.register(ElementServiceContractCoverageTemplateReference, "ElementServiceContractCoverageTemplateReference");
