var Modeler = require("../Modeler.js");
var className = 'TypeCustomCarrierPartyReferenceType';

var TypeCustomCarrierPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCarrierPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCarrierPartyReferenceType",
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
	  CustomCarrierPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCarrierPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCarrierPartyReferenceType;
Modeler.register(TypeCustomCarrierPartyReferenceType, "TypeCustomCarrierPartyReferenceType");
