var Modeler = require("../Modeler.js");
var className = 'TypeCustomPayeePartyAccountReferenceType';

var TypeCustomPayeePartyAccountReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPayeePartyAccountReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPayeePartyAccountReferenceType",
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
	  CustomPayeePartyAccountReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPayeePartyAccountReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPayeePartyAccountReferenceType;
Modeler.register(TypeCustomPayeePartyAccountReferenceType, "TypeCustomPayeePartyAccountReferenceType");
