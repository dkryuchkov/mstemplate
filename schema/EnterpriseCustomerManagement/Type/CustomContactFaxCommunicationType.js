var Modeler = require("../Modeler.js");
var className = 'TypeCustomContactFaxCommunicationType';

var TypeCustomContactFaxCommunicationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomContactFaxCommunicationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomContactFaxCommunicationType",
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
	  CustomContactFaxCommunicationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomContactFaxCommunicationType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomContactFaxCommunicationType;
Modeler.register(TypeCustomContactFaxCommunicationType, "TypeCustomContactFaxCommunicationType");
