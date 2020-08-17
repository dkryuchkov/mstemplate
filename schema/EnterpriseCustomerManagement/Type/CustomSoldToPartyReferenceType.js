var Modeler = require("../Modeler.js");
var className = 'TypeCustomSoldToPartyReferenceType';

var TypeCustomSoldToPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSoldToPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSoldToPartyReferenceType",
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
	  CustomSoldToPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSoldToPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSoldToPartyReferenceType;
Modeler.register(TypeCustomSoldToPartyReferenceType, "TypeCustomSoldToPartyReferenceType");
