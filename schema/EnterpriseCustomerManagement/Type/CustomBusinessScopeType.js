var Modeler = require("../Modeler.js");
var className = 'TypeCustomBusinessScopeType';

var TypeCustomBusinessScopeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBusinessScopeType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBusinessScopeType",
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
	  CustomBusinessScopeType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBusinessScopeType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBusinessScopeType;
Modeler.register(TypeCustomBusinessScopeType, "TypeCustomBusinessScopeType");
