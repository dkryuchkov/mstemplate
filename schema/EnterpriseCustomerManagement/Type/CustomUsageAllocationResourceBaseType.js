var Modeler = require("../Modeler.js");
var className = 'TypeCustomUsageAllocationResourceBaseType';

var TypeCustomUsageAllocationResourceBaseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomUsageAllocationResourceBaseType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomUsageAllocationResourceBaseType",
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
	  CustomUsageAllocationResourceBaseType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomUsageAllocationResourceBaseType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomUsageAllocationResourceBaseType;
Modeler.register(TypeCustomUsageAllocationResourceBaseType, "TypeCustomUsageAllocationResourceBaseType");
