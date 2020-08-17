var Modeler = require("../Modeler.js");
var className = 'TypeCustomConfigurationReferenceType';

var TypeCustomConfigurationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomConfigurationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomConfigurationReferenceType",
        attribute: false,
        type: "xsd:string"
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
	  CustomConfigurationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomConfigurationReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomConfigurationReferenceType;
Modeler.register(TypeCustomConfigurationReferenceType, "TypeCustomConfigurationReferenceType");
