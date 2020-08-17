var Modeler = require("../Modeler.js");
var className = 'ElementMilitaryEmployment';

var ElementMilitaryEmployment = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MilitaryEmployment: {
      type: "TypeMilitaryEmploymentType",
      wsdlDefinition: {
        name: "MilitaryEmployment",
        type: "MilitaryEmploymentType",
        "xsd:annotation": {
          "xsd:documentation": "Military Employment details"
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
	  MilitaryEmployment: {
      type: "TypeMilitaryEmploymentType",
      wsdlDefinition: {
        name: "MilitaryEmployment",
        type: "MilitaryEmploymentType",
        "xsd:annotation": {
          "xsd:documentation": "Military Employment details"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementMilitaryEmployment;
Modeler.register(ElementMilitaryEmployment, "ElementMilitaryEmployment");
