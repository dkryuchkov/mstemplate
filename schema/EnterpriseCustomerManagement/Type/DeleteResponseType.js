var Modeler = require("../Modeler.js");
var className = 'TypeDeleteResponseType';

var TypeDeleteResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DeleteResponseType: {
      type: "string",
      wsdlDefinition: {
        name: "DeleteResponseType",
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
	  DeleteResponseType: {
      type: "string",
      wsdlDefinition: {
        name: "DeleteResponseType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDeleteResponseType;
Modeler.register(TypeDeleteResponseType, "TypeDeleteResponseType");
