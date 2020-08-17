var Modeler = require("../Modeler.js");
var className = 'TypeCustomPaydexType';

var TypeCustomPaydexType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPaydexType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPaydexType",
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
	  CustomPaydexType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPaydexType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPaydexType;
Modeler.register(TypeCustomPaydexType, "TypeCustomPaydexType");
