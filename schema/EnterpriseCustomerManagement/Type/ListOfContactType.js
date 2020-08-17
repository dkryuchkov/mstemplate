var Modeler = require("../Modeler.js");
var className = 'TypeListOfContactType';

var TypeListOfContactType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FacilityContact: {
      type: "TypeFacilityContactType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:FacilityContact",
        type: "FacilityContactType",
        attribute: false,
        ns: "corecomcust"
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
	  FacilityContact: {
      type: "TypeFacilityContactType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:FacilityContact",
        type: "FacilityContactType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfContactType;
Modeler.register(TypeListOfContactType, "TypeListOfContactType");
