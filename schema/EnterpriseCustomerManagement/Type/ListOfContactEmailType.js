var Modeler = require("../Modeler.js");
var className = 'TypeListOfContactEmailType';

var TypeListOfContactEmailType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ContactEmail: {
      type: "TypeContactEmailType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:ContactEmail",
        type: "ContactEmailType",
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
	  ContactEmail: {
      type: "TypeContactEmailType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:ContactEmail",
        type: "ContactEmailType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfContactEmailType;
Modeler.register(TypeListOfContactEmailType, "TypeListOfContactEmailType");
