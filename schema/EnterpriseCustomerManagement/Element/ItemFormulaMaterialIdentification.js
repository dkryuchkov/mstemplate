var Modeler = require("../Modeler.js");
var className = 'ElementItemFormulaMaterialIdentification';

var ElementItemFormulaMaterialIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemFormulaMaterialIdentification: {
      type: "TypeItemFormulaMaterialIdentificationType",
      wsdlDefinition: {
        name: "ItemFormulaMaterialIdentification",
        type: "ItemFormulaMaterialIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a material in an item formula"
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
	  ItemFormulaMaterialIdentification: {
      type: "TypeItemFormulaMaterialIdentificationType",
      wsdlDefinition: {
        name: "ItemFormulaMaterialIdentification",
        type: "ItemFormulaMaterialIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a material in an item formula"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemFormulaMaterialIdentification;
Modeler.register(ElementItemFormulaMaterialIdentification, "ElementItemFormulaMaterialIdentification");
