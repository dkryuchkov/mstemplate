var Modeler = require("../Modeler.js");
var className = 'TypeCustomManufacturingRoutingActivityReferenceType';

var TypeCustomManufacturingRoutingActivityReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomManufacturingRoutingActivityReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomManufacturingRoutingActivityReferenceType",
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
	  CustomManufacturingRoutingActivityReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomManufacturingRoutingActivityReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomManufacturingRoutingActivityReferenceType;
Modeler.register(TypeCustomManufacturingRoutingActivityReferenceType, "TypeCustomManufacturingRoutingActivityReferenceType");
