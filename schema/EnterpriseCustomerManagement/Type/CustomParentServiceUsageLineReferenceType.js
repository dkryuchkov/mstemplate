var Modeler = require("../Modeler.js");
var className = 'TypeCustomParentServiceUsageLineReferenceType';

var TypeCustomParentServiceUsageLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomParentServiceUsageLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomParentServiceUsageLineReferenceType",
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
	  CustomParentServiceUsageLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomParentServiceUsageLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomParentServiceUsageLineReferenceType;
Modeler.register(TypeCustomParentServiceUsageLineReferenceType, "TypeCustomParentServiceUsageLineReferenceType");
