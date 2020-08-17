var Modeler = require("../Modeler.js");
var className = 'TypeCustomPayFromPartyReferenceType';

var TypeCustomPayFromPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPayFromPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPayFromPartyReferenceType",
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
	  CustomPayFromPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPayFromPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPayFromPartyReferenceType;
Modeler.register(TypeCustomPayFromPartyReferenceType, "TypeCustomPayFromPartyReferenceType");
