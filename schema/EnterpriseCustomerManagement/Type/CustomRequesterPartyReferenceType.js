var Modeler = require("../Modeler.js");
var className = 'TypeCustomRequesterPartyReferenceType';

var TypeCustomRequesterPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomRequesterPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRequesterPartyReferenceType",
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
	  CustomRequesterPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRequesterPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomRequesterPartyReferenceType;
Modeler.register(TypeCustomRequesterPartyReferenceType, "TypeCustomRequesterPartyReferenceType");
