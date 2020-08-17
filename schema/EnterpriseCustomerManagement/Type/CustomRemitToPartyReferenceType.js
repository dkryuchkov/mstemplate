var Modeler = require("../Modeler.js");
var className = 'TypeCustomRemitToPartyReferenceType';

var TypeCustomRemitToPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomRemitToPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRemitToPartyReferenceType",
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
	  CustomRemitToPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRemitToPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomRemitToPartyReferenceType;
Modeler.register(TypeCustomRemitToPartyReferenceType, "TypeCustomRemitToPartyReferenceType");
