var Modeler = require("../Modeler.js");
var className = 'TypeCustomB2BProfileType';

var TypeCustomB2BProfileType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomB2BProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomB2BProfileType",
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
	  CustomB2BProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomB2BProfileType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomB2BProfileType;
Modeler.register(TypeCustomB2BProfileType, "TypeCustomB2BProfileType");
