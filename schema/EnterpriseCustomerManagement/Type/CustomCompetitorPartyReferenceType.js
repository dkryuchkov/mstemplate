var Modeler = require("../Modeler.js");
var className = 'TypeCustomCompetitorPartyReferenceType';

var TypeCustomCompetitorPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCompetitorPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCompetitorPartyReferenceType",
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
	  CustomCompetitorPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCompetitorPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCompetitorPartyReferenceType;
Modeler.register(TypeCustomCompetitorPartyReferenceType, "TypeCustomCompetitorPartyReferenceType");
