var Modeler = require("../Modeler.js");
var className = 'ElementSupplierPartyLocationIdentification';

var ElementSupplierPartyLocationIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SupplierPartyLocationIdentification: {
      type: "TypeLocationIdentificationType",
      wsdlDefinition: {
        name: "SupplierPartyLocationIdentification",
        type: "LocationIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  SupplierPartyLocationIdentification: {
      type: "TypeLocationIdentificationType",
      wsdlDefinition: {
        name: "SupplierPartyLocationIdentification",
        type: "LocationIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSupplierPartyLocationIdentification;
Modeler.register(ElementSupplierPartyLocationIdentification, "ElementSupplierPartyLocationIdentification");
