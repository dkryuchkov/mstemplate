var Modeler = require("../Modeler.js");
var className = 'TypeCustomRelatedServiceRequestReferenceType';

var TypeCustomRelatedServiceRequestReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomRelatedServiceRequestReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRelatedServiceRequestReferenceType",
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
	  CustomRelatedServiceRequestReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRelatedServiceRequestReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomRelatedServiceRequestReferenceType;
Modeler.register(TypeCustomRelatedServiceRequestReferenceType, "TypeCustomRelatedServiceRequestReferenceType");
