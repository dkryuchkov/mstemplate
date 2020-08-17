var Modeler = require("../Modeler.js");
var className = 'ElementObjectKey';

var ElementObjectKey = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ObjectKey: {
      type: "TypeObjectKeyType",
      wsdlDefinition: {
        name: "ObjectKey",
        type: "ObjectKeyType",
        "xsd:annotation": {
          "xsd:documentation": "Abstract representation of a multi-part key"
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
	  ObjectKey: {
      type: "TypeObjectKeyType",
      wsdlDefinition: {
        name: "ObjectKey",
        type: "ObjectKeyType",
        "xsd:annotation": {
          "xsd:documentation": "Abstract representation of a multi-part key"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementObjectKey;
Modeler.register(ElementObjectKey, "ElementObjectKey");
