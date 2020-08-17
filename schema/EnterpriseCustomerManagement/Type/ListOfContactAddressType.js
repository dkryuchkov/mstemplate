var Modeler = require("../Modeler.js");
var className = 'TypeListOfContactAddressType';

var TypeListOfContactAddressType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ContactAddress: {
      type: "TypeContactAddressType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:ContactAddress",
        type: "ContactAddressType",
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
	  ContactAddress: {
      type: "TypeContactAddressType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:ContactAddress",
        type: "ContactAddressType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfContactAddressType;
Modeler.register(TypeListOfContactAddressType, "TypeListOfContactAddressType");
