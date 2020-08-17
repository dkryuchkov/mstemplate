var Modeler = require("../Modeler.js");
var className = 'TypeCustomItemFormulaReferenceType';

var TypeCustomItemFormulaReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomItemFormulaReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemFormulaReferenceType",
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
	  CustomItemFormulaReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemFormulaReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomItemFormulaReferenceType;
Modeler.register(TypeCustomItemFormulaReferenceType, "TypeCustomItemFormulaReferenceType");
