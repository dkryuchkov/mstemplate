var Modeler = require("../Modeler.js");
var className = 'TypeCustomManufacturerPartyReferenceType';

var TypeCustomManufacturerPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomManufacturerPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomManufacturerPartyReferenceType",
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
	  CustomManufacturerPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomManufacturerPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomManufacturerPartyReferenceType;
Modeler.register(TypeCustomManufacturerPartyReferenceType, "TypeCustomManufacturerPartyReferenceType");
