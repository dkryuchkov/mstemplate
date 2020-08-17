var Modeler = require("../Modeler.js");
var className = 'ElementItemFormulaReference';

var ElementItemFormulaReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemFormulaReference: {
      type: "TypeItemFormulaReferenceType",
      wsdlDefinition: {
        name: "ItemFormulaReference",
        type: "ItemFormulaReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a process manufacturing formula of an item"
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
	  ItemFormulaReference: {
      type: "TypeItemFormulaReferenceType",
      wsdlDefinition: {
        name: "ItemFormulaReference",
        type: "ItemFormulaReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a process manufacturing formula of an item"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemFormulaReference;
Modeler.register(ElementItemFormulaReference, "ElementItemFormulaReference");
