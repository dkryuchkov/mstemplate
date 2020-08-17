var Modeler = require("../Modeler.js");
var className = 'TypeCustomReceivingPartyReferenceType';

var TypeCustomReceivingPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomReceivingPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomReceivingPartyReferenceType",
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
	  CustomReceivingPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomReceivingPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomReceivingPartyReferenceType;
Modeler.register(TypeCustomReceivingPartyReferenceType, "TypeCustomReceivingPartyReferenceType");
