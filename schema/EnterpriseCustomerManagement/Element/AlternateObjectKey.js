var Modeler = require("../Modeler.js");
var className = 'ElementAlternateObjectKey';

var ElementAlternateObjectKey = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AlternateObjectKey: {
      type: "TypeObjectKeyType",
      wsdlDefinition: {
        name: "AlternateObjectKey",
        type: "ObjectKeyType",
        "xsd:annotation": {
          "xsd:documentation": "One or more ways of additionally identifying the object's instance. This can be optionally used to capture additional identifying details if necessary."
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
	  AlternateObjectKey: {
      type: "TypeObjectKeyType",
      wsdlDefinition: {
        name: "AlternateObjectKey",
        type: "ObjectKeyType",
        "xsd:annotation": {
          "xsd:documentation": "One or more ways of additionally identifying the object's instance. This can be optionally used to capture additional identifying details if necessary."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAlternateObjectKey;
Modeler.register(ElementAlternateObjectKey, "ElementAlternateObjectKey");
