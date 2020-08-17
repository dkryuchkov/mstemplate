var Modeler = require("../Modeler.js");
var className = 'ElementUpdateReason';

var ElementUpdateReason = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UpdateReason: {
      type: "TypeUpdateReasonType",
      wsdlDefinition: {
        name: "UpdateReason",
        type: "UpdateReasonType",
        "xsd:annotation": {
          "xsd:documentation": "A reason which cause an update/change to the contain object/component"
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
	  UpdateReason: {
      type: "TypeUpdateReasonType",
      wsdlDefinition: {
        name: "UpdateReason",
        type: "UpdateReasonType",
        "xsd:annotation": {
          "xsd:documentation": "A reason which cause an update/change to the contain object/component"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUpdateReason;
Modeler.register(ElementUpdateReason, "ElementUpdateReason");
