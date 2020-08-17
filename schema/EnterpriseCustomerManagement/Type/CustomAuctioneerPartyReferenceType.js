var Modeler = require("../Modeler.js");
var className = 'TypeCustomAuctioneerPartyReferenceType';

var TypeCustomAuctioneerPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomAuctioneerPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomAuctioneerPartyReferenceType",
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
	  CustomAuctioneerPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomAuctioneerPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomAuctioneerPartyReferenceType;
Modeler.register(TypeCustomAuctioneerPartyReferenceType, "TypeCustomAuctioneerPartyReferenceType");
