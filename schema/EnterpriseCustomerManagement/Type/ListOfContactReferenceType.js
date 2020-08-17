var Modeler = require("../Modeler.js");
var className = 'TypeListOfContactReferenceType';

var TypeListOfContactReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ContactReference: {
      type: "TypeContactReferenceType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:ContactReference",
        type: "ContactReferenceType",
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
	  ContactReference: {
      type: "TypeContactReferenceType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:ContactReference",
        type: "ContactReferenceType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfContactReferenceType;
Modeler.register(TypeListOfContactReferenceType, "TypeListOfContactReferenceType");
