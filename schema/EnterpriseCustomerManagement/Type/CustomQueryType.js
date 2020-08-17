var Modeler = require("../Modeler.js");
var className = 'TypeCustomQueryType';

var TypeCustomQueryType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomQueryType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomQueryType",
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
	  CustomQueryType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomQueryType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomQueryType;
Modeler.register(TypeCustomQueryType, "TypeCustomQueryType");
