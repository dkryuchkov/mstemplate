var Modeler = require("../Modeler.js");
var className = 'TypeCustomCheckType';

var TypeCustomCheckType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCheckType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCheckType",
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
	  CustomCheckType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCheckType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCheckType;
Modeler.register(TypeCustomCheckType, "TypeCustomCheckType");
