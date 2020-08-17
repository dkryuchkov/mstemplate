var Modeler = require("../Modeler.js");
var className = 'ElementItemLotIdentification';

var ElementItemLotIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemLotIdentification: {
      type: "TypeItemLotIdentificationType",
      wsdlDefinition: {
        name: "ItemLotIdentification",
        type: "ItemLotIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an Item Lot"
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
	  ItemLotIdentification: {
      type: "TypeItemLotIdentificationType",
      wsdlDefinition: {
        name: "ItemLotIdentification",
        type: "ItemLotIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an Item Lot"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemLotIdentification;
Modeler.register(ElementItemLotIdentification, "ElementItemLotIdentification");
