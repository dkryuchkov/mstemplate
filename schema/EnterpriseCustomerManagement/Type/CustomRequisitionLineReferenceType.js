var Modeler = require("../Modeler.js");
var className = 'TypeCustomRequisitionLineReferenceType';

var TypeCustomRequisitionLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomRequisitionLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRequisitionLineReferenceType",
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
	  CustomRequisitionLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRequisitionLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomRequisitionLineReferenceType;
Modeler.register(TypeCustomRequisitionLineReferenceType, "TypeCustomRequisitionLineReferenceType");
