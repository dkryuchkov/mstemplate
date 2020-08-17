var Modeler = require("../Modeler.js");
var className = 'TypeCustomBuyerPartyReferenceType';

var TypeCustomBuyerPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBuyerPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBuyerPartyReferenceType",
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
	  CustomBuyerPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBuyerPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBuyerPartyReferenceType;
Modeler.register(TypeCustomBuyerPartyReferenceType, "TypeCustomBuyerPartyReferenceType");
