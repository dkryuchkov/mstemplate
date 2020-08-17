var Modeler = require("../Modeler.js");
var className = 'TypeCustomBusinessUnitReferenceType';

var TypeCustomBusinessUnitReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBusinessUnitReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBusinessUnitReferenceType",
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
	  CustomBusinessUnitReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBusinessUnitReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBusinessUnitReferenceType;
Modeler.register(TypeCustomBusinessUnitReferenceType, "TypeCustomBusinessUnitReferenceType");
