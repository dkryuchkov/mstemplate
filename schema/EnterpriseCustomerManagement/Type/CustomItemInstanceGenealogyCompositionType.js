var Modeler = require("../Modeler.js");
var className = 'TypeCustomItemInstanceGenealogyCompositionType';

var TypeCustomItemInstanceGenealogyCompositionType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomItemInstanceGenealogyCompositionType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemInstanceGenealogyCompositionType",
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
	  CustomItemInstanceGenealogyCompositionType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemInstanceGenealogyCompositionType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomItemInstanceGenealogyCompositionType;
Modeler.register(TypeCustomItemInstanceGenealogyCompositionType, "TypeCustomItemInstanceGenealogyCompositionType");
