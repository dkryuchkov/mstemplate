var Modeler = require("../Modeler.js");
var className = 'TypeCreateResponseType';

var TypeCreateResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreateResponseType: {
      type: "string",
      wsdlDefinition: {
        name: "CreateResponseType",
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
	  CreateResponseType: {
      type: "string",
      wsdlDefinition: {
        name: "CreateResponseType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateResponseType;
Modeler.register(TypeCreateResponseType, "TypeCreateResponseType");
