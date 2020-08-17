var Modeler = require("../Modeler.js");
var className = 'ElementShippingProfileIdentification';

var ElementShippingProfileIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShippingProfileIdentification: {
      type: "TypeShippingProfileIdentificationType",
      wsdlDefinition: {
        name: "ShippingProfileIdentification",
        type: "ShippingProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Shipping Profile"
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
	  ShippingProfileIdentification: {
      type: "TypeShippingProfileIdentificationType",
      wsdlDefinition: {
        name: "ShippingProfileIdentification",
        type: "ShippingProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Shipping Profile"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShippingProfileIdentification;
Modeler.register(ElementShippingProfileIdentification, "ElementShippingProfileIdentification");
