var Modeler = require("../Modeler.js");
var className = 'TypeListOfContactIdentifierType';

var TypeListOfContactIdentifierType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ContactIdentifier: {
      type: "TypeContactIdentifierType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:ContactIdentifier",
        type: "ContactIdentifierType",
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
	  ContactIdentifier: {
      type: "TypeContactIdentifierType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:ContactIdentifier",
        type: "ContactIdentifierType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfContactIdentifierType;
Modeler.register(TypeListOfContactIdentifierType, "TypeListOfContactIdentifierType");
