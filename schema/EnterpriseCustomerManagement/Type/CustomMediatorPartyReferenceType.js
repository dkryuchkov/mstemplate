var Modeler = require("../Modeler.js");
var className = 'TypeCustomMediatorPartyReferenceType';

var TypeCustomMediatorPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomMediatorPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomMediatorPartyReferenceType",
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
	  CustomMediatorPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomMediatorPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomMediatorPartyReferenceType;
Modeler.register(TypeCustomMediatorPartyReferenceType, "TypeCustomMediatorPartyReferenceType");
