var Modeler = require("../Modeler.js");
var className = 'TypeCustomOwnerPartyReferenceType';

var TypeCustomOwnerPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomOwnerPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomOwnerPartyReferenceType",
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
	  CustomOwnerPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomOwnerPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomOwnerPartyReferenceType;
Modeler.register(TypeCustomOwnerPartyReferenceType, "TypeCustomOwnerPartyReferenceType");
