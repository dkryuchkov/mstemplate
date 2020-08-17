var Modeler = require("../Modeler.js");
var className = 'TypeListOfContactNamesType';

var TypeListOfContactNamesType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ContactNames: {
      type: "TypeContactNamesType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:ContactNames",
        type: "ContactNamesType",
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
	  ContactNames: {
      type: "TypeContactNamesType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:ContactNames",
        type: "ContactNamesType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfContactNamesType;
Modeler.register(TypeListOfContactNamesType, "TypeListOfContactNamesType");
