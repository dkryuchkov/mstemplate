var Modeler = require("../Modeler.js");
var className = 'TypeCustomFulfillmentOrderLineReferenceType';

var TypeCustomFulfillmentOrderLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFulfillmentOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFulfillmentOrderLineReferenceType",
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
	  CustomFulfillmentOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFulfillmentOrderLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFulfillmentOrderLineReferenceType;
Modeler.register(TypeCustomFulfillmentOrderLineReferenceType, "TypeCustomFulfillmentOrderLineReferenceType");
