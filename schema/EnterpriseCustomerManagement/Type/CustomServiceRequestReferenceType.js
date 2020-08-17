var Modeler = require("../Modeler.js");
var className = 'TypeCustomServiceRequestReferenceType';

var TypeCustomServiceRequestReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomServiceRequestReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomServiceRequestReferenceType",
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
	  CustomServiceRequestReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomServiceRequestReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomServiceRequestReferenceType;
Modeler.register(TypeCustomServiceRequestReferenceType, "TypeCustomServiceRequestReferenceType");
