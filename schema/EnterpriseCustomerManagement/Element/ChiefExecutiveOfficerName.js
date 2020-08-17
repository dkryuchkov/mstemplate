var Modeler = require("../Modeler.js");
var className = 'ElementChiefExecutiveOfficerName';

var ElementChiefExecutiveOfficerName = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ChiefExecutiveOfficerName: {
      type: "TypePersonNameType",
      wsdlDefinition: {
        name: "ChiefExecutiveOfficerName",
        type: "PersonNameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the CEO of an organization"
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
	  ChiefExecutiveOfficerName: {
      type: "TypePersonNameType",
      wsdlDefinition: {
        name: "ChiefExecutiveOfficerName",
        type: "PersonNameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the CEO of an organization"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementChiefExecutiveOfficerName;
Modeler.register(ElementChiefExecutiveOfficerName, "ElementChiefExecutiveOfficerName");
