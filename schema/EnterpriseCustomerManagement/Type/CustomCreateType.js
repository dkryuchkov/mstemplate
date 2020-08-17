var Modeler = require("../Modeler.js");
var className = 'TypeCustomCreateType';

var TypeCustomCreateType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCreateType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCreateType",
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
	  CustomCreateType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCreateType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCreateType;
Modeler.register(TypeCustomCreateType, "TypeCustomCreateType");
