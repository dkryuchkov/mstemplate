var Modeler = require("../Modeler.js");
var className = 'ElementConfigurationIdentification';

var ElementConfigurationIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ConfigurationIdentification: {
      type: "TypeConfigurationIdentificationType",
      wsdlDefinition: {
        name: "ConfigurationIdentification",
        type: "ConfigurationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a configuration"
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
	  ConfigurationIdentification: {
      type: "TypeConfigurationIdentificationType",
      wsdlDefinition: {
        name: "ConfigurationIdentification",
        type: "ConfigurationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a configuration"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementConfigurationIdentification;
Modeler.register(ElementConfigurationIdentification, "ElementConfigurationIdentification");
