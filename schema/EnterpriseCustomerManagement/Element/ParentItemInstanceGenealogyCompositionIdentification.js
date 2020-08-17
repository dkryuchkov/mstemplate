var Modeler = require("../Modeler.js");
var className = 'ElementParentItemInstanceGenealogyCompositionIdentification';

var ElementParentItemInstanceGenealogyCompositionIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentItemInstanceGenealogyCompositionIdentification: {
      type: "TypeItemInstanceGenealogyCompositionIdentificationType",
      wsdlDefinition: {
        name: "ParentItemInstanceGenealogyCompositionIdentification",
        type: "ItemInstanceGenealogyCompositionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identification of the genealogy item instance's parent.  This parent ID is used to define the hierarchy of item instances within the genealogy when the genealogy describes the hierarchy of saleable units for the order line item."
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
	  ParentItemInstanceGenealogyCompositionIdentification: {
      type: "TypeItemInstanceGenealogyCompositionIdentificationType",
      wsdlDefinition: {
        name: "ParentItemInstanceGenealogyCompositionIdentification",
        type: "ItemInstanceGenealogyCompositionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identification of the genealogy item instance's parent.  This parent ID is used to define the hierarchy of item instances within the genealogy when the genealogy describes the hierarchy of saleable units for the order line item."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentItemInstanceGenealogyCompositionIdentification;
Modeler.register(ElementParentItemInstanceGenealogyCompositionIdentification, "ElementParentItemInstanceGenealogyCompositionIdentification");
