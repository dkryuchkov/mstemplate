var Modeler = require("../Modeler.js");
var className = 'TypeCustomProvisioningOrderReferenceType';

var TypeCustomProvisioningOrderReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomProvisioningOrderReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomProvisioningOrderReferenceType",
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
	  CustomProvisioningOrderReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomProvisioningOrderReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomProvisioningOrderReferenceType;
Modeler.register(TypeCustomProvisioningOrderReferenceType, "TypeCustomProvisioningOrderReferenceType");
