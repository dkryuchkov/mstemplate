var Modeler = require("../Modeler.js");
var className = 'TypeCustomItemInstanceRangeType';

var TypeCustomItemInstanceRangeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomItemInstanceRangeType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemInstanceRangeType",
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
	  CustomItemInstanceRangeType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemInstanceRangeType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomItemInstanceRangeType;
Modeler.register(TypeCustomItemInstanceRangeType, "TypeCustomItemInstanceRangeType");
