var Modeler = require("../Modeler.js");
var className = 'ElementActivityIdentification';

var ElementActivityIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ActivityIdentification: {
      type: "TypeActivityIdentificationType",
      wsdlDefinition: {
        name: "ActivityIdentification",
        type: "ActivityIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Activity"
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
	  ActivityIdentification: {
      type: "TypeActivityIdentificationType",
      wsdlDefinition: {
        name: "ActivityIdentification",
        type: "ActivityIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Activity"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementActivityIdentification;
Modeler.register(ElementActivityIdentification, "ElementActivityIdentification");
