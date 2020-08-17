var Modeler = require("../Modeler.js");
var className = 'TypeCustomPriceFormulaReferenceType';

var TypeCustomPriceFormulaReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPriceFormulaReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPriceFormulaReferenceType",
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
	  CustomPriceFormulaReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPriceFormulaReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPriceFormulaReferenceType;
Modeler.register(TypeCustomPriceFormulaReferenceType, "TypeCustomPriceFormulaReferenceType");
