var Modeler = require("../Modeler.js");
var className = 'ElementInstalledProductReference';

var ElementInstalledProductReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InstalledProductReference: {
      type: "TypeInstalledProductReferenceType",
      wsdlDefinition: {
        name: "InstalledProductReference",
        type: "InstalledProductReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an installed product. An installed product defines a product or service instance deployed by a corporation or business. It includes reference to parties who may have an interest arising from ownership/lease, usage, maintenance management, billing etc. It is a snapshot of the definition of the product or service instance which includes relationship (like component, substitute, etc.) to other installed products. However, it doesn't include operations or change in value during the lifecycle of the product or service."
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
	  InstalledProductReference: {
      type: "TypeInstalledProductReferenceType",
      wsdlDefinition: {
        name: "InstalledProductReference",
        type: "InstalledProductReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an installed product. An installed product defines a product or service instance deployed by a corporation or business. It includes reference to parties who may have an interest arising from ownership/lease, usage, maintenance management, billing etc. It is a snapshot of the definition of the product or service instance which includes relationship (like component, substitute, etc.) to other installed products. However, it doesn't include operations or change in value during the lifecycle of the product or service."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementInstalledProductReference;
Modeler.register(ElementInstalledProductReference, "ElementInstalledProductReference");
