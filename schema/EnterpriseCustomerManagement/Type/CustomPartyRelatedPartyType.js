var Modeler = require("../Modeler.js");
var className = 'TypeCustomPartyRelatedPartyType';

var TypeCustomPartyRelatedPartyType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPartyRelatedPartyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPartyRelatedPartyType",
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
	  CustomPartyRelatedPartyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPartyRelatedPartyType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPartyRelatedPartyType;
Modeler.register(TypeCustomPartyRelatedPartyType, "TypeCustomPartyRelatedPartyType");
