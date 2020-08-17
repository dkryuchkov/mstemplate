var Modeler = require("../Modeler.js");
var className = 'TypeCustomContactAddressCommunicationType';

var TypeCustomContactAddressCommunicationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomContactAddressCommunicationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomContactAddressCommunicationType",
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
	  CustomContactAddressCommunicationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomContactAddressCommunicationType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomContactAddressCommunicationType;
Modeler.register(TypeCustomContactAddressCommunicationType, "TypeCustomContactAddressCommunicationType");
