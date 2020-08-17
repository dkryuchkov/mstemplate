var Modeler = require("../Modeler.js");
var className = 'ElementPrincipalPersonName';

var ElementPrincipalPersonName = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PrincipalPersonName: {
      type: "TypePersonNameType",
      wsdlDefinition: {
        name: "PrincipalPersonName",
        type: "PersonNameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the highest ranking person in a company"
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
	  PrincipalPersonName: {
      type: "TypePersonNameType",
      wsdlDefinition: {
        name: "PrincipalPersonName",
        type: "PersonNameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the highest ranking person in a company"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPrincipalPersonName;
Modeler.register(ElementPrincipalPersonName, "ElementPrincipalPersonName");
