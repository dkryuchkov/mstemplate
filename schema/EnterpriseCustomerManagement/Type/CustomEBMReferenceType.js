var Modeler = require("../Modeler.js");
var className = 'TypeCustomEBMReferenceType';

var TypeCustomEBMReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomEBMReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEBMReferenceType",
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
	  CustomEBMReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEBMReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomEBMReferenceType;
Modeler.register(TypeCustomEBMReferenceType, "TypeCustomEBMReferenceType");
