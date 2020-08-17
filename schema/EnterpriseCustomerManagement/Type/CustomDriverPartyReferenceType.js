var Modeler = require("../Modeler.js");
var className = 'TypeCustomDriverPartyReferenceType';

var TypeCustomDriverPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomDriverPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDriverPartyReferenceType",
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
	  CustomDriverPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDriverPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomDriverPartyReferenceType;
Modeler.register(TypeCustomDriverPartyReferenceType, "TypeCustomDriverPartyReferenceType");
