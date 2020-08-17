var Modeler = require("../Modeler.js");
var className = 'TypeCustomRequiredByPartyReferenceType';

var TypeCustomRequiredByPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomRequiredByPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRequiredByPartyReferenceType",
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
	  CustomRequiredByPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRequiredByPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomRequiredByPartyReferenceType;
Modeler.register(TypeCustomRequiredByPartyReferenceType, "TypeCustomRequiredByPartyReferenceType");
