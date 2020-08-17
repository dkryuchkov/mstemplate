var Modeler = require("../Modeler.js");
var className = 'ElementFestivalAdvancePayProgramIdentification';

var ElementFestivalAdvancePayProgramIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FestivalAdvancePayProgramIdentification: {
      type: "TypeFestivalAdvancePayProgramIdentificationType",
      wsdlDefinition: {
        name: "FestivalAdvancePayProgramIdentification",
        type: "FestivalAdvancePayProgramIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Festival Advance Pay Program object"
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
	  FestivalAdvancePayProgramIdentification: {
      type: "TypeFestivalAdvancePayProgramIdentificationType",
      wsdlDefinition: {
        name: "FestivalAdvancePayProgramIdentification",
        type: "FestivalAdvancePayProgramIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Festival Advance Pay Program object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFestivalAdvancePayProgramIdentification;
Modeler.register(ElementFestivalAdvancePayProgramIdentification, "ElementFestivalAdvancePayProgramIdentification");
