var Modeler = require("../Modeler.js");
var className = 'TypeCustomContactWebsiteCommunicationType';

var TypeCustomContactWebsiteCommunicationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomContactWebsiteCommunicationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomContactWebsiteCommunicationType",
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
	  CustomContactWebsiteCommunicationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomContactWebsiteCommunicationType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomContactWebsiteCommunicationType;
Modeler.register(TypeCustomContactWebsiteCommunicationType, "TypeCustomContactWebsiteCommunicationType");
