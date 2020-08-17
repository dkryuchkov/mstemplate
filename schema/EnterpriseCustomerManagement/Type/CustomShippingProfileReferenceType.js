var Modeler = require("../Modeler.js");
var className = 'TypeCustomShippingProfileReferenceType';

var TypeCustomShippingProfileReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomShippingProfileReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShippingProfileReferenceType",
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
	  CustomShippingProfileReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShippingProfileReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomShippingProfileReferenceType;
Modeler.register(TypeCustomShippingProfileReferenceType, "TypeCustomShippingProfileReferenceType");
