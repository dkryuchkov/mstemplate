var Modeler = require("../Modeler.js");
var className = 'ElementDataElement';

var ElementDataElement = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DataElement: {
      type: "TypeDataElementType",
      wsdlDefinition: {
        name: "DataElement",
        type: "DataElementType",
        "xsd:annotation": {
          "xsd:documentation": "Data element is used for specifying an attribute of an entity"
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
	  DataElement: {
      type: "TypeDataElementType",
      wsdlDefinition: {
        name: "DataElement",
        type: "DataElementType",
        "xsd:annotation": {
          "xsd:documentation": "Data element is used for specifying an attribute of an entity"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDataElement;
Modeler.register(ElementDataElement, "ElementDataElement");
