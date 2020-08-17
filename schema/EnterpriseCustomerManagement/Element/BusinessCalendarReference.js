var Modeler = require("../Modeler.js");
var className = 'ElementBusinessCalendarReference';

var ElementBusinessCalendarReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BusinessCalendarReference: {
      type: "TypeBusinessCalendarReferenceType",
      wsdlDefinition: {
        name: "BusinessCalendarReference",
        type: "BusinessCalendarReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The calendar used for this promotion.  Calendar is pre-defined in Financials"
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
	  BusinessCalendarReference: {
      type: "TypeBusinessCalendarReferenceType",
      wsdlDefinition: {
        name: "BusinessCalendarReference",
        type: "BusinessCalendarReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The calendar used for this promotion.  Calendar is pre-defined in Financials"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBusinessCalendarReference;
Modeler.register(ElementBusinessCalendarReference, "ElementBusinessCalendarReference");
