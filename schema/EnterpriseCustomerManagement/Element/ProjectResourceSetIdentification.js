var Modeler = require("../Modeler.js");
var className = 'ElementProjectResourceSetIdentification';

var ElementProjectResourceSetIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProjectResourceSetIdentification: {
      type: "TypeProjectResourceSetIdentificationType",
      wsdlDefinition: {
        name: "ProjectResourceSetIdentification",
        type: "ProjectResourceSetIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Project Resource Set object"
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
	  ProjectResourceSetIdentification: {
      type: "TypeProjectResourceSetIdentificationType",
      wsdlDefinition: {
        name: "ProjectResourceSetIdentification",
        type: "ProjectResourceSetIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Project Resource Set object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProjectResourceSetIdentification;
Modeler.register(ElementProjectResourceSetIdentification, "ElementProjectResourceSetIdentification");
