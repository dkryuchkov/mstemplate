var Modeler = require("../Modeler.js");
var className = 'TypeCustomDeliverToPartyReferenceType';

var TypeCustomDeliverToPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomDeliverToPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDeliverToPartyReferenceType",
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
	  CustomDeliverToPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDeliverToPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomDeliverToPartyReferenceType;
Modeler.register(TypeCustomDeliverToPartyReferenceType, "TypeCustomDeliverToPartyReferenceType");
