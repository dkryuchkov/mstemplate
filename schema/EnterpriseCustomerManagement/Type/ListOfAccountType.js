var Modeler = require("../Modeler.js");
var className = 'TypeListOfAccountType';

var TypeListOfAccountType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FacilityAccount: {
      type: "TypeFacilityAccountType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:FacilityAccount",
        type: "FacilityAccountType",
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
	  FacilityAccount: {
      type: "TypeFacilityAccountType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:FacilityAccount",
        type: "FacilityAccountType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfAccountType;
Modeler.register(TypeListOfAccountType, "TypeListOfAccountType");
