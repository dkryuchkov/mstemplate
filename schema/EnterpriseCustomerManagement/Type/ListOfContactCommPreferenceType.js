var Modeler = require("../Modeler.js");
var className = 'TypeListOfContactCommPreferenceType';

var TypeListOfContactCommPreferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CommPreference: {
      type: "TypeCommPreferenceType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:CommPreference",
        type: "CommPreferenceType",
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
	  CommPreference: {
      type: "TypeCommPreferenceType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:CommPreference",
        type: "CommPreferenceType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfContactCommPreferenceType;
Modeler.register(TypeListOfContactCommPreferenceType, "TypeListOfContactCommPreferenceType");
