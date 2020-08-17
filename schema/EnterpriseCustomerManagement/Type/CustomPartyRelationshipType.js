var Modeler = require("../Modeler.js");
var className = 'TypeCustomPartyRelationshipType';

var TypeCustomPartyRelationshipType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPartyRelationshipType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPartyRelationshipType",
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
	  CustomPartyRelationshipType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPartyRelationshipType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPartyRelationshipType;
Modeler.register(TypeCustomPartyRelationshipType, "TypeCustomPartyRelationshipType");
