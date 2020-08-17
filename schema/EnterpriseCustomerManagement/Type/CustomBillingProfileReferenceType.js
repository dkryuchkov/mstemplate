var Modeler = require("../Modeler.js");
var className = 'TypeCustomBillingProfileReferenceType';

var TypeCustomBillingProfileReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBillingProfileReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBillingProfileReferenceType",
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
	  CustomBillingProfileReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBillingProfileReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBillingProfileReferenceType;
Modeler.register(TypeCustomBillingProfileReferenceType, "TypeCustomBillingProfileReferenceType");
