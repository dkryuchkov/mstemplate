var Modeler = require("../Modeler.js");
var className = 'ElementServiceLocationIdentification';

var ElementServiceLocationIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ServiceLocationIdentification: {
      type: "TypeLocationIdentificationType",
      wsdlDefinition: {
        name: "ServiceLocationIdentification",
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
	  ServiceLocationIdentification: {
      type: "TypeLocationIdentificationType",
      wsdlDefinition: {
        name: "ServiceLocationIdentification",
        type: "LocationIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementServiceLocationIdentification;
Modeler.register(ElementServiceLocationIdentification, "ElementServiceLocationIdentification");
