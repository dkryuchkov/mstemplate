var Modeler = require("../Modeler.js");
var className = 'TypeCustomPriorPayFromPartyReferenceType';

var TypeCustomPriorPayFromPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPriorPayFromPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPriorPayFromPartyReferenceType",
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
	  CustomPriorPayFromPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPriorPayFromPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPriorPayFromPartyReferenceType;
Modeler.register(TypeCustomPriorPayFromPartyReferenceType, "TypeCustomPriorPayFromPartyReferenceType");
