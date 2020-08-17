var Modeler = require("../Modeler.js");
var className = 'TypeCustomBargainingUnitReferenceType';

var TypeCustomBargainingUnitReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBargainingUnitReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBargainingUnitReferenceType",
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
	  CustomBargainingUnitReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBargainingUnitReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBargainingUnitReferenceType;
Modeler.register(TypeCustomBargainingUnitReferenceType, "TypeCustomBargainingUnitReferenceType");
