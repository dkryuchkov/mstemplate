var Modeler = require("../Modeler.js");
var className = 'TypeCustomProvisioningOrderLineReferenceType';

var TypeCustomProvisioningOrderLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomProvisioningOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomProvisioningOrderLineReferenceType",
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
	  CustomProvisioningOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomProvisioningOrderLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomProvisioningOrderLineReferenceType;
Modeler.register(TypeCustomProvisioningOrderLineReferenceType, "TypeCustomProvisioningOrderLineReferenceType");
