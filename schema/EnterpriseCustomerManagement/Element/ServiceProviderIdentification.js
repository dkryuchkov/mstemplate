var Modeler = require("../Modeler.js");
var className = 'ElementServiceProviderIdentification';

var ElementServiceProviderIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ServiceProviderIdentification: {
      type: "TypeServiceProviderIdentificationType",
      wsdlDefinition: {
        name: "ServiceProviderIdentification",
        type: "ServiceProviderIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identifier for the Service Provider (solution) record"
        },
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
	  ServiceProviderIdentification: {
      type: "TypeServiceProviderIdentificationType",
      wsdlDefinition: {
        name: "ServiceProviderIdentification",
        type: "ServiceProviderIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identifier for the Service Provider (solution) record"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementServiceProviderIdentification;
Modeler.register(ElementServiceProviderIdentification, "ElementServiceProviderIdentification");
