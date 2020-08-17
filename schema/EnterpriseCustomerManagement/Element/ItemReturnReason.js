var Modeler = require("../Modeler.js");
var className = 'ElementItemReturnReason';

var ElementItemReturnReason = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemReturnReason: {
      type: "TypeItemReturnReasonType",
      wsdlDefinition: {
        name: "ItemReturnReason",
        type: "ItemReturnReasonType",
        "xsd:annotation": {
          "xsd:documentation": "The reason for returning the goods."
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
	  ItemReturnReason: {
      type: "TypeItemReturnReasonType",
      wsdlDefinition: {
        name: "ItemReturnReason",
        type: "ItemReturnReasonType",
        "xsd:annotation": {
          "xsd:documentation": "The reason for returning the goods."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemReturnReason;
Modeler.register(ElementItemReturnReason, "ElementItemReturnReason");
