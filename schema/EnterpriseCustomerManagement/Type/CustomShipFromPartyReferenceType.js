var Modeler = require("../Modeler.js");
var className = 'TypeCustomShipFromPartyReferenceType';

var TypeCustomShipFromPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomShipFromPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipFromPartyReferenceType",
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
	  CustomShipFromPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipFromPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomShipFromPartyReferenceType;
Modeler.register(TypeCustomShipFromPartyReferenceType, "TypeCustomShipFromPartyReferenceType");
