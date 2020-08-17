var Modeler = require("../Modeler.js");
var className = 'ElementRMAIdentification';

var ElementRMAIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RMAIdentification: {
      type: "TypeRMAIdentificationType",
      wsdlDefinition: {
        name: "RMAIdentification",
        type: "RMAIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a RMA"
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
	  RMAIdentification: {
      type: "TypeRMAIdentificationType",
      wsdlDefinition: {
        name: "RMAIdentification",
        type: "RMAIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a RMA"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRMAIdentification;
Modeler.register(ElementRMAIdentification, "ElementRMAIdentification");
