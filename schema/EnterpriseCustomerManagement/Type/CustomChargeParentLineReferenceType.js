var Modeler = require("../Modeler.js");
var className = 'TypeCustomChargeParentLineReferenceType';

var TypeCustomChargeParentLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomChargeParentLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomChargeParentLineReferenceType",
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
	  CustomChargeParentLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomChargeParentLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomChargeParentLineReferenceType;
Modeler.register(TypeCustomChargeParentLineReferenceType, "TypeCustomChargeParentLineReferenceType");
