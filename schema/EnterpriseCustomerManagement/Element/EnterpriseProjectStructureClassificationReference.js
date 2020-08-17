var Modeler = require("../Modeler.js");
var className = 'ElementEnterpriseProjectStructureClassificationReference';

var ElementEnterpriseProjectStructureClassificationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EnterpriseProjectStructureClassificationReference: {
      type: "TypeEnterpriseProjectStructureClassificationReferenceType",
      wsdlDefinition: {
        name: "EnterpriseProjectStructureClassificationReference",
        type: "EnterpriseProjectStructureClassificationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The reference to the parent EPS of this project. The Enterprise Project Structure (EPS) forms the hierarchical structure of how all projects at an installed site may be organized. Each EPS node (or folder) can be subdivided into multiple levels to represent the work that needs to be done. The number of levels and their structure depend on the scope of all the projects and how data is to be summarized. Every project is associated with a specific EPS node."
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
	  EnterpriseProjectStructureClassificationReference: {
      type: "TypeEnterpriseProjectStructureClassificationReferenceType",
      wsdlDefinition: {
        name: "EnterpriseProjectStructureClassificationReference",
        type: "EnterpriseProjectStructureClassificationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The reference to the parent EPS of this project. The Enterprise Project Structure (EPS) forms the hierarchical structure of how all projects at an installed site may be organized. Each EPS node (or folder) can be subdivided into multiple levels to represent the work that needs to be done. The number of levels and their structure depend on the scope of all the projects and how data is to be summarized. Every project is associated with a specific EPS node."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEnterpriseProjectStructureClassificationReference;
Modeler.register(ElementEnterpriseProjectStructureClassificationReference, "ElementEnterpriseProjectStructureClassificationReference");
