var Modeler = require("../Modeler.js");
var className = 'ElementBargainingUnitIdentification';

var ElementBargainingUnitIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BargainingUnitIdentification: {
      type: "TypeBargainingUnitIdentificationType",
      wsdlDefinition: {
        name: "BargainingUnitIdentification",
        type: "BargainingUnitIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identfication of a Bargaining Unit object"
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
	  BargainingUnitIdentification: {
      type: "TypeBargainingUnitIdentificationType",
      wsdlDefinition: {
        name: "BargainingUnitIdentification",
        type: "BargainingUnitIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identfication of a Bargaining Unit object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBargainingUnitIdentification;
Modeler.register(ElementBargainingUnitIdentification, "ElementBargainingUnitIdentification");
