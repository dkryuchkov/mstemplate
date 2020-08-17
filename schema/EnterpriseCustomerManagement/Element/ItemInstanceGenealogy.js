var Modeler = require("../Modeler.js");
var className = 'ElementItemInstanceGenealogy';

var ElementItemInstanceGenealogy = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemInstanceGenealogy: {
      type: "TypeItemInstanceGenealogyType",
      wsdlDefinition: {
        name: "ItemInstanceGenealogy",
        type: "ItemInstanceGenealogyType",
        "xsd:annotation": {
          "xsd:documentation": "This object describes the genealogy of an order line item in one of two ways.  In the first scenario, the order line item may be packed into multiple layers of packaging, each of which represents a saleable unit of measure.  In this case, the genealogy object identifies each saleable unit of the item and the hierarchy of the saleable units.  For example, a bottle, the lowest saleable unit of the item, is packaged into a box which is packaged into a case.  For the alternate scenario, the genealogy object describes each subcomponent that makes up the order line item.  For example, if the item is a kit, the genealogy would contain an element for each component item in the kit."
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
	  ItemInstanceGenealogy: {
      type: "TypeItemInstanceGenealogyType",
      wsdlDefinition: {
        name: "ItemInstanceGenealogy",
        type: "ItemInstanceGenealogyType",
        "xsd:annotation": {
          "xsd:documentation": "This object describes the genealogy of an order line item in one of two ways.  In the first scenario, the order line item may be packed into multiple layers of packaging, each of which represents a saleable unit of measure.  In this case, the genealogy object identifies each saleable unit of the item and the hierarchy of the saleable units.  For example, a bottle, the lowest saleable unit of the item, is packaged into a box which is packaged into a case.  For the alternate scenario, the genealogy object describes each subcomponent that makes up the order line item.  For example, if the item is a kit, the genealogy would contain an element for each component item in the kit."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemInstanceGenealogy;
Modeler.register(ElementItemInstanceGenealogy, "ElementItemInstanceGenealogy");
