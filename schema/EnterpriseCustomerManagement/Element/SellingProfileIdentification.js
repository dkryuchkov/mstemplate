var Modeler = require("../Modeler.js");
var className = 'ElementSellingProfileIdentification';

var ElementSellingProfileIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SellingProfileIdentification: {
      type: "TypeSellingProfileIdentificationType",
      wsdlDefinition: {
        name: "SellingProfileIdentification",
        type: "SellingProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Selling Profile"
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
	  SellingProfileIdentification: {
      type: "TypeSellingProfileIdentificationType",
      wsdlDefinition: {
        name: "SellingProfileIdentification",
        type: "SellingProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Selling Profile"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSellingProfileIdentification;
Modeler.register(ElementSellingProfileIdentification, "ElementSellingProfileIdentification");
