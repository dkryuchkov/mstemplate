var Modeler = require("../Modeler.js");
var className = 'ElementHouseholdPartyReference';

var ElementHouseholdPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  HouseholdPartyReference: {
      type: "TypeHouseholdPartyReferenceType",
      wsdlDefinition: {
        name: "HouseholdPartyReference",
        type: "HouseholdPartyReferenceType",
        ns: "WL5G3N2",
        attribute: false
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
	  HouseholdPartyReference: {
      type: "TypeHouseholdPartyReferenceType",
      wsdlDefinition: {
        name: "HouseholdPartyReference",
        type: "HouseholdPartyReferenceType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementHouseholdPartyReference;
Modeler.register(ElementHouseholdPartyReference, "ElementHouseholdPartyReference");
