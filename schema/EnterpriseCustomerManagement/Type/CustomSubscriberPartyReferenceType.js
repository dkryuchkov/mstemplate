var Modeler = require("../Modeler.js");
var className = 'TypeCustomSubscriberPartyReferenceType';

var TypeCustomSubscriberPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSubscriberPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSubscriberPartyReferenceType",
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
	  CustomSubscriberPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSubscriberPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSubscriberPartyReferenceType;
Modeler.register(TypeCustomSubscriberPartyReferenceType, "TypeCustomSubscriberPartyReferenceType");
