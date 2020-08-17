var Modeler = require("../Modeler.js");
var className = 'TypeCustomPayeePartyReferenceType';

var TypeCustomPayeePartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPayeePartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPayeePartyReferenceType",
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
	  CustomPayeePartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPayeePartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPayeePartyReferenceType;
Modeler.register(TypeCustomPayeePartyReferenceType, "TypeCustomPayeePartyReferenceType");
