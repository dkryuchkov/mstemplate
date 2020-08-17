var Modeler = require("../Modeler.js");
var className = 'TypeCustomFulfillmentOrderReferenceType';

var TypeCustomFulfillmentOrderReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFulfillmentOrderReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFulfillmentOrderReferenceType",
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
	  CustomFulfillmentOrderReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFulfillmentOrderReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFulfillmentOrderReferenceType;
Modeler.register(TypeCustomFulfillmentOrderReferenceType, "TypeCustomFulfillmentOrderReferenceType");
