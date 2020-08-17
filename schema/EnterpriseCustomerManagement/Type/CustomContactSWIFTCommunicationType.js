var Modeler = require("../Modeler.js");
var className = 'TypeCustomContactSWIFTCommunicationType';

var TypeCustomContactSWIFTCommunicationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomContactSWIFTCommunicationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomContactSWIFTCommunicationType",
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
	  CustomContactSWIFTCommunicationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomContactSWIFTCommunicationType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomContactSWIFTCommunicationType;
Modeler.register(TypeCustomContactSWIFTCommunicationType, "TypeCustomContactSWIFTCommunicationType");
