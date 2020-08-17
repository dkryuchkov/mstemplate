var Modeler = require("../Modeler.js");
var className = 'TypeListOfHouseholdPositionType';

var TypeListOfHouseholdPositionType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  HouseholdPosition: {
      type: "TypeContactPositionType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:HouseholdPosition",
        type: "ContactPositionType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  HouseholdPosition: {
      type: "TypeContactPositionType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:HouseholdPosition",
        type: "ContactPositionType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfHouseholdPositionType;
Modeler.register(TypeListOfHouseholdPositionType, "TypeListOfHouseholdPositionType");
