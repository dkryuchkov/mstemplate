var Modeler = require("../Modeler.js");
var className = 'TypeCustomPublisherPartyReferenceType';

var TypeCustomPublisherPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPublisherPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPublisherPartyReferenceType",
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
	  CustomPublisherPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPublisherPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPublisherPartyReferenceType;
Modeler.register(TypeCustomPublisherPartyReferenceType, "TypeCustomPublisherPartyReferenceType");
