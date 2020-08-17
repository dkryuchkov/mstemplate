var Modeler = require("../Modeler.js");
var className = 'TypeCustomRequisitionReferenceType';

var TypeCustomRequisitionReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomRequisitionReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRequisitionReferenceType",
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
	  CustomRequisitionReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRequisitionReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomRequisitionReferenceType;
Modeler.register(TypeCustomRequisitionReferenceType, "TypeCustomRequisitionReferenceType");
