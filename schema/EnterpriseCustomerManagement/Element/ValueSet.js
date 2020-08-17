var Modeler = require("../Modeler.js");
var className = 'ElementValueSet';

var ElementValueSet = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ValueSet: {
      type: "TypeValueSetType",
      wsdlDefinition: {
        name: "ValueSet",
        type: "ValueSetType",
        "xsd:annotation": {
          "xsd:documentation": "A value set is a declarative specification of a set of data values that can be entered into a given field. Value sets may be defined using a filter criteria or range (e.g., integers from 1 to 100), or with an enumerated list of values"
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
	  ValueSet: {
      type: "TypeValueSetType",
      wsdlDefinition: {
        name: "ValueSet",
        type: "ValueSetType",
        "xsd:annotation": {
          "xsd:documentation": "A value set is a declarative specification of a set of data values that can be entered into a given field. Value sets may be defined using a filter criteria or range (e.g., integers from 1 to 100), or with an enumerated list of values"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementValueSet;
Modeler.register(ElementValueSet, "ElementValueSet");
