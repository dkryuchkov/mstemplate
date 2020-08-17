var Modeler = require("../Modeler.js");
var className = 'TypeCustomOutsourcerPartyReferenceType';

var TypeCustomOutsourcerPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomOutsourcerPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomOutsourcerPartyReferenceType",
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
	  CustomOutsourcerPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomOutsourcerPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomOutsourcerPartyReferenceType;
Modeler.register(TypeCustomOutsourcerPartyReferenceType, "TypeCustomOutsourcerPartyReferenceType");
