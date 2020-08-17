var Modeler = require("../Modeler.js");
var className = 'ElementItemStructureIdentification';

var ElementItemStructureIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemStructureIdentification: {
      type: "TypeItemStructureIdentificationType",
      wsdlDefinition: {
        name: "ItemStructureIdentification",
        type: "ItemStructureIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Item Structure"
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
	  ItemStructureIdentification: {
      type: "TypeItemStructureIdentificationType",
      wsdlDefinition: {
        name: "ItemStructureIdentification",
        type: "ItemStructureIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Item Structure"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemStructureIdentification;
Modeler.register(ElementItemStructureIdentification, "ElementItemStructureIdentification");
