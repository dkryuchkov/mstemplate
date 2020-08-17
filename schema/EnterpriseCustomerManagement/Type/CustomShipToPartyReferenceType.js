var Modeler = require("../Modeler.js");
var className = 'TypeCustomShipToPartyReferenceType';

var TypeCustomShipToPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomShipToPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipToPartyReferenceType",
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
	  CustomShipToPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipToPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomShipToPartyReferenceType;
Modeler.register(TypeCustomShipToPartyReferenceType, "TypeCustomShipToPartyReferenceType");
