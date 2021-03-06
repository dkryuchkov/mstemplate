var Modeler = require("../Modeler.js");
var className = 'ElementApplicationObjectKey';

var ElementApplicationObjectKey = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ApplicationObjectKey: {
      type: "TypeObjectKeyType",
      wsdlDefinition: {
        name: "ApplicationObjectKey",
        type: "ObjectKeyType",
        "xsd:annotation": {
          "xsd:documentation": "Participating Application specific internally generated unique identifier for this object instance. Business Documents generated by AIA applications will have to necessarily populate this information. This would represent the primary key of the object at the participating application"
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
	  ApplicationObjectKey: {
      type: "TypeObjectKeyType",
      wsdlDefinition: {
        name: "ApplicationObjectKey",
        type: "ObjectKeyType",
        "xsd:annotation": {
          "xsd:documentation": "Participating Application specific internally generated unique identifier for this object instance. Business Documents generated by AIA applications will have to necessarily populate this information. This would represent the primary key of the object at the participating application"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementApplicationObjectKey;
Modeler.register(ElementApplicationObjectKey, "ElementApplicationObjectKey");
