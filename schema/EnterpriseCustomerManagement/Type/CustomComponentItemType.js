var Modeler = require("../Modeler.js");
var className = 'TypeCustomComponentItemType';

var TypeCustomComponentItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomComponentItemType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomComponentItemType",
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
	  CustomComponentItemType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomComponentItemType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomComponentItemType;
Modeler.register(TypeCustomComponentItemType, "TypeCustomComponentItemType");
