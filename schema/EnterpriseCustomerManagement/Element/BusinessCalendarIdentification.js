var Modeler = require("../Modeler.js");
var className = 'ElementBusinessCalendarIdentification';

var ElementBusinessCalendarIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BusinessCalendarIdentification: {
      type: "TypeBusinessCalendarIdentificationType",
      wsdlDefinition: {
        name: "BusinessCalendarIdentification",
        type: "BusinessCalendarIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Business Calendar"
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
	  BusinessCalendarIdentification: {
      type: "TypeBusinessCalendarIdentificationType",
      wsdlDefinition: {
        name: "BusinessCalendarIdentification",
        type: "BusinessCalendarIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Business Calendar"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBusinessCalendarIdentification;
Modeler.register(ElementBusinessCalendarIdentification, "ElementBusinessCalendarIdentification");
