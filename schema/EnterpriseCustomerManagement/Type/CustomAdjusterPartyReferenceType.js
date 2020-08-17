var Modeler = require("../Modeler.js");
var className = 'TypeCustomAdjusterPartyReferenceType';

var TypeCustomAdjusterPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomAdjusterPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomAdjusterPartyReferenceType",
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
	  CustomAdjusterPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomAdjusterPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomAdjusterPartyReferenceType;
Modeler.register(TypeCustomAdjusterPartyReferenceType, "TypeCustomAdjusterPartyReferenceType");
