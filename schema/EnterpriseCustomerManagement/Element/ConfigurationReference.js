var Modeler = require("../Modeler.js");
var className = 'ElementConfigurationReference';

var ElementConfigurationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ConfigurationReference: {
      type: "TypeConfigurationReferenceType",
      wsdlDefinition: {
        name: "ConfigurationReference",
        type: "ConfigurationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a configuration definition of a product"
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
	  ConfigurationReference: {
      type: "TypeConfigurationReferenceType",
      wsdlDefinition: {
        name: "ConfigurationReference",
        type: "ConfigurationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a configuration definition of a product"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementConfigurationReference;
Modeler.register(ElementConfigurationReference, "ElementConfigurationReference");
