var Modeler = require("../Modeler.js");
var className = 'TypeCustomSpecificationGroupType';

var TypeCustomSpecificationGroupType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSpecificationGroupType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSpecificationGroupType",
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
	  CustomSpecificationGroupType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSpecificationGroupType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSpecificationGroupType;
Modeler.register(TypeCustomSpecificationGroupType, "TypeCustomSpecificationGroupType");
