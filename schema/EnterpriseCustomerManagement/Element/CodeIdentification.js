var Modeler = require("../Modeler.js");
var className = 'ElementCodeIdentification';

var ElementCodeIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CodeIdentification: {
      type: "TypeCodeIdentificationType",
      wsdlDefinition: {
        name: "CodeIdentification",
        type: "CodeIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Means of identifying all objects that use a code value for identification"
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
	  CodeIdentification: {
      type: "TypeCodeIdentificationType",
      wsdlDefinition: {
        name: "CodeIdentification",
        type: "CodeIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Means of identifying all objects that use a code value for identification"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCodeIdentification;
Modeler.register(ElementCodeIdentification, "ElementCodeIdentification");
