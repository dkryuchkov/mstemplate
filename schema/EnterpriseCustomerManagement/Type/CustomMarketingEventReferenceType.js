var Modeler = require("../Modeler.js");
var className = 'TypeCustomMarketingEventReferenceType';

var TypeCustomMarketingEventReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomMarketingEventReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomMarketingEventReferenceType",
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
	  CustomMarketingEventReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomMarketingEventReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomMarketingEventReferenceType;
Modeler.register(TypeCustomMarketingEventReferenceType, "TypeCustomMarketingEventReferenceType");
