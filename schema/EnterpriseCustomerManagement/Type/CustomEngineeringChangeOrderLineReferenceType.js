var Modeler = require("../Modeler.js");
var className = 'TypeCustomEngineeringChangeOrderLineReferenceType';

var TypeCustomEngineeringChangeOrderLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomEngineeringChangeOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEngineeringChangeOrderLineReferenceType",
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
	  CustomEngineeringChangeOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEngineeringChangeOrderLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomEngineeringChangeOrderLineReferenceType;
Modeler.register(TypeCustomEngineeringChangeOrderLineReferenceType, "TypeCustomEngineeringChangeOrderLineReferenceType");
