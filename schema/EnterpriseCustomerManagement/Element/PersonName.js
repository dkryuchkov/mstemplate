var Modeler = require("../Modeler.js");
var className = 'ElementPersonName';

var ElementPersonName = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PersonName: {
      type: "TypePersonNameType",
      wsdlDefinition: {
        name: "PersonName",
        type: "PersonNameType",
        "xsd:annotation": {
          "xsd:documentation": "The different parts of the name of a person"
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
	  PersonName: {
      type: "TypePersonNameType",
      wsdlDefinition: {
        name: "PersonName",
        type: "PersonNameType",
        "xsd:annotation": {
          "xsd:documentation": "The different parts of the name of a person"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPersonName;
Modeler.register(ElementPersonName, "ElementPersonName");
