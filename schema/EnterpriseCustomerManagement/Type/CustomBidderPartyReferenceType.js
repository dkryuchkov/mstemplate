var Modeler = require("../Modeler.js");
var className = 'TypeCustomBidderPartyReferenceType';

var TypeCustomBidderPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBidderPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBidderPartyReferenceType",
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
	  CustomBidderPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBidderPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBidderPartyReferenceType;
Modeler.register(TypeCustomBidderPartyReferenceType, "TypeCustomBidderPartyReferenceType");
