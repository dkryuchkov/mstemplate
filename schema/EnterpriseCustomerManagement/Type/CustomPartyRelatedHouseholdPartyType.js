var Modeler = require("../Modeler.js");
var className = 'TypeCustomPartyRelatedHouseholdPartyType';

var TypeCustomPartyRelatedHouseholdPartyType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPartyRelatedHouseholdPartyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPartyRelatedHouseholdPartyType",
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
	  CustomPartyRelatedHouseholdPartyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPartyRelatedHouseholdPartyType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPartyRelatedHouseholdPartyType;
Modeler.register(TypeCustomPartyRelatedHouseholdPartyType, "TypeCustomPartyRelatedHouseholdPartyType");
