var Modeler = require("../Modeler.js");
var className = 'TypeCustomEmployerPartyReferenceType';

var TypeCustomEmployerPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomEmployerPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEmployerPartyReferenceType",
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
	  CustomEmployerPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEmployerPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomEmployerPartyReferenceType;
Modeler.register(TypeCustomEmployerPartyReferenceType, "TypeCustomEmployerPartyReferenceType");
