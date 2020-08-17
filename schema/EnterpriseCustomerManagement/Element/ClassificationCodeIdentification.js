var Modeler = require("../Modeler.js");
var className = 'ElementClassificationCodeIdentification';

var ElementClassificationCodeIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ClassificationCodeIdentification: {
      type: "TypeClassificationCodeIdentificationType",
      wsdlDefinition: {
        name: "ClassificationCodeIdentification",
        type: "ClassificationCodeIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of the classification"
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
	  ClassificationCodeIdentification: {
      type: "TypeClassificationCodeIdentificationType",
      wsdlDefinition: {
        name: "ClassificationCodeIdentification",
        type: "ClassificationCodeIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of the classification"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementClassificationCodeIdentification;
Modeler.register(ElementClassificationCodeIdentification, "ElementClassificationCodeIdentification");
