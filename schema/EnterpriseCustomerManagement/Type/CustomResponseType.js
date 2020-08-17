var Modeler = require("../Modeler.js");
var className = 'TypeCustomResponseType';

var TypeCustomResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomResponseType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomResponseType",
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
	  CustomResponseType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomResponseType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomResponseType;
Modeler.register(TypeCustomResponseType, "TypeCustomResponseType");
