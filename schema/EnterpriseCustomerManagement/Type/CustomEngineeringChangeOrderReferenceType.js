var Modeler = require("../Modeler.js");
var className = 'TypeCustomEngineeringChangeOrderReferenceType';

var TypeCustomEngineeringChangeOrderReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomEngineeringChangeOrderReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEngineeringChangeOrderReferenceType",
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
	  CustomEngineeringChangeOrderReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEngineeringChangeOrderReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomEngineeringChangeOrderReferenceType;
Modeler.register(TypeCustomEngineeringChangeOrderReferenceType, "TypeCustomEngineeringChangeOrderReferenceType");
