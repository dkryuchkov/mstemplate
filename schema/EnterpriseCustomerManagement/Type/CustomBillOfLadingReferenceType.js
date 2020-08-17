var Modeler = require("../Modeler.js");
var className = 'TypeCustomBillOfLadingReferenceType';

var TypeCustomBillOfLadingReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBillOfLadingReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBillOfLadingReferenceType",
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
	  CustomBillOfLadingReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBillOfLadingReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBillOfLadingReferenceType;
Modeler.register(TypeCustomBillOfLadingReferenceType, "TypeCustomBillOfLadingReferenceType");
