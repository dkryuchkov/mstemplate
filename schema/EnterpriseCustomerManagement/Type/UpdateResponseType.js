var Modeler = require("../Modeler.js");
var className = 'TypeUpdateResponseType';

var TypeUpdateResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UpdateResponseType: {
      type: "string",
      wsdlDefinition: {
        name: "UpdateResponseType",
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
	  UpdateResponseType: {
      type: "string",
      wsdlDefinition: {
        name: "UpdateResponseType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeUpdateResponseType;
Modeler.register(TypeUpdateResponseType, "TypeUpdateResponseType");
