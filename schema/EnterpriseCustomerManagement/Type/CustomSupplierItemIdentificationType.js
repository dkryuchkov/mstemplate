var Modeler = require("../Modeler.js");
var className = 'TypeCustomSupplierItemIdentificationType';

var TypeCustomSupplierItemIdentificationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSupplierItemIdentificationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSupplierItemIdentificationType",
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
	  CustomSupplierItemIdentificationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSupplierItemIdentificationType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSupplierItemIdentificationType;
Modeler.register(TypeCustomSupplierItemIdentificationType, "TypeCustomSupplierItemIdentificationType");
