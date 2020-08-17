var Modeler = require("../Modeler.js");
var className = 'ElementValueSetIdentification';

var ElementValueSetIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ValueSetIdentification: {
      type: "TypeValueSetIdentificationType",
      wsdlDefinition: {
        name: "ValueSetIdentification",
        type: "ValueSetIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Value Set"
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
	  ValueSetIdentification: {
      type: "TypeValueSetIdentificationType",
      wsdlDefinition: {
        name: "ValueSetIdentification",
        type: "ValueSetIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Value Set"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementValueSetIdentification;
Modeler.register(ElementValueSetIdentification, "ElementValueSetIdentification");
