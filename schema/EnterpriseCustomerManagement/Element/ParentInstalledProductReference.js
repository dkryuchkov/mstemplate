var Modeler = require("../Modeler.js");
var className = 'ElementParentInstalledProductReference';

var ElementParentInstalledProductReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentInstalledProductReference: {
      type: "TypeInstalledProductReferenceType",
      wsdlDefinition: {
        name: "ParentInstalledProductReference",
        type: "InstalledProductReferenceType",
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
	  ParentInstalledProductReference: {
      type: "TypeInstalledProductReferenceType",
      wsdlDefinition: {
        name: "ParentInstalledProductReference",
        type: "InstalledProductReferenceType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentInstalledProductReference;
Modeler.register(ElementParentInstalledProductReference, "ElementParentInstalledProductReference");
