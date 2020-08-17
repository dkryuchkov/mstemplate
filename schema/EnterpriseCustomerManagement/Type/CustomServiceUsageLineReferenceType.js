var Modeler = require("../Modeler.js");
var className = 'TypeCustomServiceUsageLineReferenceType';

var TypeCustomServiceUsageLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomServiceUsageLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomServiceUsageLineReferenceType",
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
	  CustomServiceUsageLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomServiceUsageLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomServiceUsageLineReferenceType;
Modeler.register(TypeCustomServiceUsageLineReferenceType, "TypeCustomServiceUsageLineReferenceType");
