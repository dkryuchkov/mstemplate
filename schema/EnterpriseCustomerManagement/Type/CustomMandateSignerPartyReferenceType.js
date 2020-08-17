var Modeler = require("../Modeler.js");
var className = 'TypeCustomMandateSignerPartyReferenceType';

var TypeCustomMandateSignerPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomMandateSignerPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomMandateSignerPartyReferenceType",
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
	  CustomMandateSignerPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomMandateSignerPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomMandateSignerPartyReferenceType;
Modeler.register(TypeCustomMandateSignerPartyReferenceType, "TypeCustomMandateSignerPartyReferenceType");
