var Modeler = require("../Modeler.js");
var className = 'TypeConfigurationReferenceType';

var TypeConfigurationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ConfigurationIdentification: {
      type: "TypeConfigurationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ConfigurationIdentification",
        type: "ConfigurationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomConfigurationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomConfigurationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:ConfigurationIdentification",
        type: "ConfigurationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomConfigurationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomConfigurationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeConfigurationReferenceType;
Modeler.register(TypeConfigurationReferenceType, "TypeConfigurationReferenceType");
