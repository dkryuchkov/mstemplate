var Modeler = require("../Modeler.js");
var className = 'ElementItemFormulaIdentification';

var ElementItemFormulaIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemFormulaIdentification: {
      type: "TypeItemFormulaIdentificationType",
      wsdlDefinition: {
        name: "ItemFormulaIdentification",
        type: "ItemFormulaIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an item formula"
        },
        ns: "WL5G3N2",
        attribute: false
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
	  ItemFormulaIdentification: {
      type: "TypeItemFormulaIdentificationType",
      wsdlDefinition: {
        name: "ItemFormulaIdentification",
        type: "ItemFormulaIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an item formula"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemFormulaIdentification;
Modeler.register(ElementItemFormulaIdentification, "ElementItemFormulaIdentification");
