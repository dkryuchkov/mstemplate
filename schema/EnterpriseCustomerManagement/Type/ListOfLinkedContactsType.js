var Modeler = require("../Modeler.js");
var className = 'TypeListOfLinkedContactsType';

var TypeListOfLinkedContactsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LinkedContact: {
      type: "TypeLinkedContactType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:LinkedContact",
        type: "LinkedContactType",
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
	  LinkedContact: {
      type: "TypeLinkedContactType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:LinkedContact",
        type: "LinkedContactType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfLinkedContactsType;
Modeler.register(TypeListOfLinkedContactsType, "TypeListOfLinkedContactsType");
