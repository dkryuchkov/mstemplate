var Modeler = require("../Modeler.js");
var className = 'ElementReason';

var ElementReason = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Reason: {
      type: "TypeReasonType",
      wsdlDefinition: {
        name: "Reason",
        type: "ReasonType",
        "xsd:annotation": {
          "xsd:documentation": "A component used for indicating a reason/cause for something by either pointing to a predefined reason with a detail explanation associated with the predefined reason or just by providing the detail explanation/description."
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
	  Reason: {
      type: "TypeReasonType",
      wsdlDefinition: {
        name: "Reason",
        type: "ReasonType",
        "xsd:annotation": {
          "xsd:documentation": "A component used for indicating a reason/cause for something by either pointing to a predefined reason with a detail explanation associated with the predefined reason or just by providing the detail explanation/description."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReason;
Modeler.register(ElementReason, "ElementReason");
