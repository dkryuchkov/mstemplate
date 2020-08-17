var Modeler = require("../Modeler.js");
var className = 'TypeListOfContactPhoneType';

var TypeListOfContactPhoneType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ContactPhone: {
      type: "TypeContactPhoneType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:ContactPhone",
        type: "ContactPhoneType",
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
	  ContactPhone: {
      type: "TypeContactPhoneType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:ContactPhone",
        type: "ContactPhoneType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfContactPhoneType;
Modeler.register(TypeListOfContactPhoneType, "TypeListOfContactPhoneType");
