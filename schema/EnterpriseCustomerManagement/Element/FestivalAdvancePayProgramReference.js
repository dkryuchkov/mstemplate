var Modeler = require("../Modeler.js");
var className = 'ElementFestivalAdvancePayProgramReference';

var ElementFestivalAdvancePayProgramReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FestivalAdvancePayProgramReference: {
      type: "TypeFestivalAdvancePayProgramReferenceType",
      wsdlDefinition: {
        name: "FestivalAdvancePayProgramReference",
        type: "FestivalAdvancePayProgramReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Festival Advance Pay Program object such as those in Singapore, Malaysia, etc. It represents a scheme which pays employee's salary in advance during a special festival (holidays)."
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
	  FestivalAdvancePayProgramReference: {
      type: "TypeFestivalAdvancePayProgramReferenceType",
      wsdlDefinition: {
        name: "FestivalAdvancePayProgramReference",
        type: "FestivalAdvancePayProgramReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Festival Advance Pay Program object such as those in Singapore, Malaysia, etc. It represents a scheme which pays employee's salary in advance during a special festival (holidays)."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFestivalAdvancePayProgramReference;
Modeler.register(ElementFestivalAdvancePayProgramReference, "ElementFestivalAdvancePayProgramReference");
