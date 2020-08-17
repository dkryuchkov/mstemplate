var Modeler = require("../Modeler.js");
var className = 'TypeListOfDriverAddressType';

var TypeListOfDriverAddressType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DriverAddress: {
      type: "TypeDriverAddressType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:DriverAddress",
        type: "DriverAddressType",
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
	  DriverAddress: {
      type: "TypeDriverAddressType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:DriverAddress",
        type: "DriverAddressType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfDriverAddressType;
Modeler.register(TypeListOfDriverAddressType, "TypeListOfDriverAddressType");
