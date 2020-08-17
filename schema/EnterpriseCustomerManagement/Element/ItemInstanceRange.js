var Modeler = require("../Modeler.js");
var className = 'ElementItemInstanceRange';

var ElementItemInstanceRange = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemInstanceRange: {
      type: "TypeItemInstanceRangeType",
      wsdlDefinition: {
        name: "ItemInstanceRange",
        type: "ItemInstanceRangeType",
        "xsd:annotation": {
          "xsd:documentation": "Identification of unique instances of an item via ranges of serial numbers"
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
	  ItemInstanceRange: {
      type: "TypeItemInstanceRangeType",
      wsdlDefinition: {
        name: "ItemInstanceRange",
        type: "ItemInstanceRangeType",
        "xsd:annotation": {
          "xsd:documentation": "Identification of unique instances of an item via ranges of serial numbers"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemInstanceRange;
Modeler.register(ElementItemInstanceRange, "ElementItemInstanceRange");
