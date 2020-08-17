var Modeler = require("../Modeler.js");
var className = 'ElementClassificationSpecificationIdentification';

var ElementClassificationSpecificationIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ClassificationSpecificationIdentification: {
      type: "TypeClassificationSpecificationIdentificationType",
      wsdlDefinition: {
        name: "ClassificationSpecificationIdentification",
        type: "ClassificationSpecificationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a classification specification business component"
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
	  ClassificationSpecificationIdentification: {
      type: "TypeClassificationSpecificationIdentificationType",
      wsdlDefinition: {
        name: "ClassificationSpecificationIdentification",
        type: "ClassificationSpecificationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a classification specification business component"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementClassificationSpecificationIdentification;
Modeler.register(ElementClassificationSpecificationIdentification, "ElementClassificationSpecificationIdentification");
