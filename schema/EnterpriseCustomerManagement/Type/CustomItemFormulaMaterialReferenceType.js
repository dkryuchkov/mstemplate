var Modeler = require("../Modeler.js");
var className = 'TypeCustomItemFormulaMaterialReferenceType';

var TypeCustomItemFormulaMaterialReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomItemFormulaMaterialReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemFormulaMaterialReferenceType",
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
	  CustomItemFormulaMaterialReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemFormulaMaterialReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomItemFormulaMaterialReferenceType;
Modeler.register(TypeCustomItemFormulaMaterialReferenceType, "TypeCustomItemFormulaMaterialReferenceType");
