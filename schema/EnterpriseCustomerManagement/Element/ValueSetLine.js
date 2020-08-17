var Modeler = require("../Modeler.js");
var className = 'ElementValueSetLine';

var ElementValueSetLine = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ValueSetLine: {
      type: "TypeValueSetLineType",
      wsdlDefinition: {
        name: "ValueSetLine",
        type: "ValueSetLineType",
        "xsd:annotation": {
          "xsd:documentation": "Holding a legal value in the value set"
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
	  ValueSetLine: {
      type: "TypeValueSetLineType",
      wsdlDefinition: {
        name: "ValueSetLine",
        type: "ValueSetLineType",
        "xsd:annotation": {
          "xsd:documentation": "Holding a legal value in the value set"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementValueSetLine;
Modeler.register(ElementValueSetLine, "ElementValueSetLine");
