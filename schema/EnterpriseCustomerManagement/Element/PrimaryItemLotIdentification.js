var Modeler = require("../Modeler.js");
var className = 'ElementPrimaryItemLotIdentification';

var ElementPrimaryItemLotIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PrimaryItemLotIdentification: {
      type: "TypeItemLotIdentificationType",
      wsdlDefinition: {
        name: "PrimaryItemLotIdentification",
        type: "ItemLotIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a primary Item Lot"
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
	  PrimaryItemLotIdentification: {
      type: "TypeItemLotIdentificationType",
      wsdlDefinition: {
        name: "PrimaryItemLotIdentification",
        type: "ItemLotIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a primary Item Lot"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPrimaryItemLotIdentification;
Modeler.register(ElementPrimaryItemLotIdentification, "ElementPrimaryItemLotIdentification");
